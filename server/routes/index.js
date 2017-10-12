const router = require('express').Router();

const authCheckMiddleware = require('../middleware/auth-check');
const auth = require('./auth.routes');
const client = require('./client.routes');
const file = require('./file.routes');
const program = require('./program.routes');
const user = require('./user.routes');

module.exports = (app) => {
    // pass the authorization checker middleware
    app.use('/api', authCheckMiddleware);

    // api routes
    app.use('/api', client);
    app.use('/api', program);
    app.use('/api', user);

    app.use('/file', file);
    app.use('/auth', auth);
}
