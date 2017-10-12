const localSignupStrategy = require('../passport/local-signup');
const localLoginStrategy = require('../passport/local-login');
const passport = require('passport');

module.exports = (app) => {
    passport.use('local-signup', localSignupStrategy);
    passport.use('local-login', localLoginStrategy);
}
