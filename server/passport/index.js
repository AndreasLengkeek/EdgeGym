const localSignupStrategy = require('./local-signup');
const logins = require('./passport.js');
const passport = require('passport');

passport.use(logins.jwtLogin);
passport.use(logins.localLogin);
