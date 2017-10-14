const passport = require('passport');
const logins = require('./passport.js');

passport.use(logins.jwtLogin);
passport.use(logins.localLogin);
