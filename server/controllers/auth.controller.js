const User = require('mongoose').model('User');;
const Client = require('mongoose').model('Client');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const validator = require('validator');

const mail = require('../services/sendgrid');

// create token
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    const expireTime = timestamp + (1000 * 60 * 60 * 24 * 7); // expires in 7 days
    // the subject (sub) of this token is the user id, iat = issued at time, exp = expiry time
    return jwt.sign({ sub: user._id, iat: timestamp, exp: expireTime }, config.jwtSecret);
}

// create link code
// for confirming email and forgotten passwords
function createLinkCode(type) {
    // timestamp so can check age and random number to create linkCode
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    const linkCode = timestamp + '-' + randomNum + '-' + type;
    return linkCode;
}

// check link codes are valid
function checkCodeTime(linkCode) {
    if (!linkCode) {
        return false;
    }
    const tokenArr = linkCode.split("-");
    const timestamp = tokenArr[0];
    const now = new Date().getTime();
    const difference = timestamp - now;
    // default to 1 hour
    let timeLeft = Math.floor(difference / 1000 / 60) + 60;

    if (timeLeft < 1) {
        // expired
        return false;
    } else {
        // valid
        return timeLeft;
    }
}

// make sure login inputs are valid
function validateLoginForm(payload) {
    const errors = {};
    let isValid = true;
    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length == 0) {
        console.log('email error');
        isValid = false;
        errors.email = 'Please provide your email address';
    }

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length == 0) {
        console.log('password error');
        isValid = false;
        errors.password = 'Please provide your password';
    }

    return {
        success: isValid,
        errors
    };
}

function validateSignupForm(payload) {
    const EMAIL = payload.email;
    const PASSWORD = payload.password;
    // check if any data missing
    if (!EMAIL || !PASSWORD) {
      return { errors: { summary: 'You must provide email and password' }, success: false };
    }
    let errors = {};
    let isSuccess = true
    // check if email is a string and a valid email format
    if (typeof(EMAIL) !== 'string' || !validator.isEmail(EMAIL)) {
        errors.email = 'Not a valid email format';
        isSuccess = false;
    }
    // check if password is a string
    if (typeof(PASSWORD) !== 'string') {
        errors.password = 'Password is not valid';
        isSuccess = false;
    }
    // check if password is long enough
    if (!validator.isLength(PASSWORD, { min: 4, max: 100})) {
        errors.password = 'Password is too short';
        isSuccess = false;
    }
    // check if password and email match each other
    if (EMAIL === PASSWORD) {
      errors.password = 'Password must not match email address';
      isSuccess = false;
    }

    return {
        success: isSuccess,
        errors
    };
}

// converts mongo validation error to user friendly error
function buildValidationMessage(dbError) {
    console.log(dbError);
    const errors = {};
    for (field in dbError) {
        if (field)
            errors[field] = dbError[field].message;
    }
    return errors;
}

module.exports = {
    login: function(req, res, next) {
        // user fields to return
        const user = {
            id: req.user.id,
            username: req.user.username,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            permissions: req.user.permissions
        }

        // return user with jwt token
        return res.json({
            success: true,
            message: 'You have successfully logged in',
            token: tokenForUser(req.user),
            user: user
        });
    },
    // return token for login redirect
    facebookLogin: function(req, res, next) {
        let token = tokenForUser(req.user);
        res.redirect('/auth?'+token);
    },
    signup: function(req, res, next) {
        // validate form inputs
        const result = validateSignupForm(req.body);
        if (!result.success) {
            return res.json(result);
        }

        User.findOne({ email: req.body.email }).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to create user"
                });
            }
            // user already exists
            if (user) {
                console.log('found matching user = ', user.email)
                return res.json({
                    success: false,
                    errors: { email: "Email is already taken" }
                })
            }
            // create new user as a client user
            const u = req.body;
            const newUser = new User({
                email: u.email,
                password: u.password,
                permissions: {
                    role: "user"
                }
            });
            if (u.username) newUser.username = u.username;
            if (u.firstname) newUser.firstname = u.firstname;
            if (u.lastname) newUser.lastname = u.lastname;

            newUser.save((err, user) => {
                if (err) {
                    if (err.name == 'ValidationError')
                        return res.json({ success: false, errors: buildValidationMessage(err.errors) });
                    return res.status(500).json({
                        message: "Failed to create user"
                    });
                }
                // find the admin to assign client
                User.findOne({ 'permissions.role': 'admin' }).exec((err, admin) => {
                    if(err) {
                        return res.status(500).json({
                            message: "Failed to create user"
                        });
                    }

                    // associated client needs to be created for non coaches
                    const client = new Client({
                        user: user._id,
                        coach: admin._id
                    });
                    client.save((err, saved) => {
                        if(err) {
                            return res.status(500).json({
                                message: "Failed to create user"
                            });
                        }
                        req.user = user;
                        next();
                    });
                });
            });
        });
    },
    forgotPassword: function(req, res, next) {
        const EMAIL = req.body.email;
        // check if any data missing
        if (!EMAIL || typeof EMAIL !== 'string' || !validator.isEmail(EMAIL))
            return res.status(422).json({ error: "You must provide a valid email address" });
        // See if a user with the given email exists
        User.findOne({ email: EMAIL }, (err, existing) => {
            if (err) {
                return res.status(500).json({ error: "A server error occured"});
            }
            // If a user with the email exists send an email with a reset password link
            // link expires after an hour, add a token to the user in the DB and this needs to match the token and email and not be expired
            if (existing) {
                const resetToken = createLinkCode("pwr");
                // add to db
                User.findByIdAndUpdate(existing._id, { $set: { resetPassword: resetToken } }, (err, updated) => {
                    if (err) {
                        return res.status(500).json({ error: "A server error occured"});
                    }

                    const resetLink = 'http://' + req.headers.host + '/reset/' + resetToken;
                    // Send forgotten password email
                    mail.forgotPasswordEmail(updated.email, resetLink, (err, response) => {
                        if (err) {
                            return res.status(500).json({ error: "A server error occured"});
                        }
                        // email sent return success message
                        return res.json({ message: "Thank you, please check your email" });
                    });
                });
            } else {
                // email does not exist, return same message to not indicate whether a user has an account or not (privacy)
                return res.json({ message: "Thank you, please check your email" });
            }
        });
    },
    resetPassword: function(req, res, next) {
        const EMAIL = req.body.email;
        const PASSWORD = req.body.password;
        const RESET_CODE = req.body.reset;
        // check if any data missing
        if (!EMAIL || !PASSWORD) {
            return res.status(422).send({ error: 'You must provide email and new password'});
        }
        // check if reset token time is still valid
        if (!RESET_CODE || !checkCodeTime(RESET_CODE)) {
            return res.status(422).send({ error: 'Your forgotten password link has expired, you must use the link within 1 hour'});
        }
        // check if email is a string and a valid email format
        if (typeof EMAIL !== 'string' || !validator.isEmail(EMAIL)) {
            return res.status(422).send({ error: 'Email is not valid'});
        }
        // check if password is a string
        if (typeof PASSWORD !== 'string') {
            return res.status(422).send({ error: 'Password is not valid'});
        }
        // check if password is long enough
        if (!validator.isLength(PASSWORD, { min: 4, max: 100 })) {
            return res.status(422).send({ error: 'Password is too short'});
        }
        // check if password and email match each other
        if (EMAIL === PASSWORD) {
            return res.status(422).send({ error: 'Password must not match email address'});
        }
        // See if a user with the given email exists
        User.findOne({ email: EMAIL }, (err, existingUser) => {
            if (err) {
                return res.status(500).json({ error: "A server error occured"});
            }
            // If a user with the email does not exist, return an error
            if (!existingUser) {
                return res.status(422).send({ error: 'Email not found'});
            }
            // If the reset link doesn't match, return an error
            if (existingUser.resetPassword !== RESET_CODE) {
                return res.status(422).send({ error: 'Reset link not valid'});
            }
            existingUser.password = PASSWORD;
            existingUser.resetPassword = undefined;

            existingUser.save((err, user) => {
                if (err) {
                    return res.status(500).json({ error: "A server error occured"});
                }
                // continue to next request to login
                req.user = user;
                next();
            });
        });
    }
}
