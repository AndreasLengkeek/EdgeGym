const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config');

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

// create token
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    const expireTime = timestamp + (1000 * 60 * 60 * 24 * 7); // expires in 7 days
    // the subject (sub) of this token is the user id, iat = issued at time, exp = expiry time
    return jwt.sign({ sub: user._id, iat: timestamp, exp: expireTime }, config.jwtSecret);
}

module.exports = {
    login: function(req, res, next) {
        // const validationResult = validateLoginForm(req.body);
        // if (!validationResult.success) {
        //   return res.status(400).json(validationResult);
        // }

        return res.json({
            success: true,
            message: 'You have successfully logged in',
            token: tokenForUser(req.user),
            user: req.user
        });
    },
    signup: function(req, res, next) {
      console.log('Signing Up');
      const validationResult = { success: true};//validateSignupForm(req.body);
      if (!validationResult.success) {
        return res.status(400).json({
          success: false,
          message: validationResult.message,
          errors: validationResult.errors
        });
      }


      return passport.authenticate('local-signup', (err) => {
          console.log('passport to local signup callback');
        if (err) {
            console.log(err);
          if (err.name === 'MongoError' && err.code === 11000) {
            // the 11000 Mongo code is for a duplication email error
            // the 409 HTTP status code is for conflict error
            return res.status(409).json({
              success: false,
              message: 'Check the form for errors.',
              errors: {
                email: 'This email is already taken.'
              }
            });
          }

          return res.status(400).json({
            success: false,
            message: 'Could not process the form.'
          });
        }
        console.log('there was success');
        return res.status(200).json({
          success: true,
          message: 'You have successfully signed up! Now you should be able to log in.'
        });
      })(req, res, next);
    }
}
