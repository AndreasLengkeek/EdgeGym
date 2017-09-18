const User = require('../models/user');
const passport = require('passport');

module.exports = {
    login: function(req, res, next) {
        console.log('Logging in');
        const validationResult = { success: true };//validateSignupForm(req.body);
        if (!validationResult.success) {
          return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
          });
        }

        return passport.authenticate('local-login', (err, token, userData) => {
            console.log('passport to local login callback');
          if (err) {
              console.log(err);
            if (err.name === 'IncorrectCredentialsError') {
              return res.status(400).json({
                success: false,
                message: err.message
              });
            }

            return res.status(400).json({
              success: false,
              message: 'Could not process the form.'
            });
          }


          console.log('there was success');
          return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
          });
        })(req, res, next);
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
