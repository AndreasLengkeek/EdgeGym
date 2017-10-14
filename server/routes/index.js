const router = require('express').Router();
const passport = require('passport');

const auth = require('./auth.routes');
const client = require('./client.routes');
const file = require('./file.routes');
const program = require('./program.routes');
const user = require('./user.routes');

module.exports = (app) => {
    // session false as we are not using cookies, using tokens
    const requireAuth = passport.authenticate('jwt', { session: false });


    app.use('/api', requireAuth);
    // api routes
    app.use('/api', client);
    app.use('/api', program);
    app.use('/api', user);

    // login and sign up have passport settings on the auth route file
    app.use('/auth', auth);
    app.use('/file', file);
}
