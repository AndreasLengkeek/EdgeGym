const authController = require('../controllers/auth.controller');
const passport = require('passport');
const router = require('express').Router();

// session false as we are not using cookies, using tokens
const requireSignIn = passport.authenticate('local', { session: false })

router.route('/login')
  .post(requireSignIn, authController.login);

router.route('/signup')
  .post(authController.signup);

module.exports = router;
