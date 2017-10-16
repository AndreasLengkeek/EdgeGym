const passport = require('passport');
const logins = require('./passport.js');
const facebook = require('./facebook.js');

// add connect passport strategies to passport
passport.use(logins.jwtLogin);
passport.use(logins.localLogin);
passport.use(facebook);
