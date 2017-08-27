/**
 * Abstraced file for server routing
 */
const fs = require('fs');
const path = require('path');

/**
 * Exports all apis in the api folder
 */
module.exports = (app) => {
    // API routes
    fs.readdirSync(__dirname + '/api/').forEach((file) => {
        require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
    });
};
