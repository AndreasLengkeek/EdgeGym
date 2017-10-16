// get the api key
const API_KEY = require('../../config').sendgridKey;
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(API_KEY);

// from address
const APP_NAME = 'Edge Gym';
const APP_EMAIL = 'admin@edgegym.com.au';

// generate forgot password email
exports.forgotPasswordEmail = function(email, resetLink, callback) {
  const msg = {
    to: email,
    from: APP_EMAIL,
    subject: APP_NAME + ': Password Reset',
    html: '<html><body><p>Someone (hopefully you) requested a new password for the ' + APP_NAME + ' account for ' + email + '.</p>\
         <p>Use the link below to set up a new password for your account.</p>\
         <p>' + resetLink + '</p>\
         <p>This password reset is only valid for the next 60 minutes.</p>\
         <p>No changes have been made to your account, so if you don\'t want to change your password, or requested a new password in error, you don\'t need to take any action and can safely ignore this email.</p>\
         <p>Support at ' + APP_NAME + '</p>\
         </body></html>',
  };
  // send and callback the response
  sgMail.send(msg, function(err, res) {
    if (err) {
      console.log('Email error = ',err);
      callback(err);
    } else {
      callback(null, res);
    }
  });
}
