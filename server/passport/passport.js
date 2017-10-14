'use strict'
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const localStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../../config');

// Create local strategy for signing in with username and password
const localOptions = {
    usernameField: 'email',
    passReqToCallback: true
};

const localLogin = new localStrategy(localOptions, (req, email, password, done) => {
    // TODO sanitize input
    User.findOne({ email: email }).exec((err, user) => {
        if (err) return done(err, false);
        // user not found - no record for email address
        if (!user) return done(null, false);

        // email found - compare passwords
        user.comparePassword(password, (err, isMatch) => {
            if (err) return done(err, false);

            if (!isMatch) return done(null, false);

            return done(null, user);
        });
    });
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
};

// Create JWT strategy
// payload is the token (sub) and timestamp (iat) and expire time (exp)
const jwtLogin = new jwtStrategy(jwtOptions, (payload, done) => {
    console.log('jwt payload', payload);
    console.log('id', payload.sub);
    console.log('iat', new Date(payload.iat));
    console.log('exp', new Date(payload.exp));
    // check if the token has expired
    const NOW = new Date().getTime();
    if (payload.exp < NOW) {
        console.log('expired');
        return done(null, false);
    }
    // see if the user ID in the payload exists in our database
    // if it does call done with that user
    // otherwise call done without a user object
    User.findById(payload.sub).exec((err, user) => {
        if (err) return done(err, false);

        if (user) {
            if (user.permissions && payload.iat < user.permissions.updatedAt) {
                // if the users permissions have changed since the token was issued
                return done(null, false);
            } else {
                // the user is not locked out and the token is valid
                return done(null, user);
            }
        } else {
            return done(null, false);
        }
    })
});

module.exports = {
    localLogin,
    jwtLogin
};
