const authController = require('../controllers/auth.controller');
const passport = require('passport');
const router = require('express').Router();

// session false as we are not using cookies, using tokens
const requireSignIn = passport.authenticate('local', { session: false });
const facebookSignIn = passport.authenticate('facebook', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

router.route('/login')
  .post(requireSignIn, authController.login);

router.route('/signup')
  .post(authController.signup, authController.login);

router.route('/forgotten')
  .post(authController.forgotPassword);

router.route('/password/reset')
  .post(authController.resetPassword, authController.login);

router.route('/facebook/login')
  .post(requireAuth, authController.login);

router.route('/facebook')
  .get(facebookSignIn);

router.route('/facebook/callback')
  .get(facebookSignIn, authController.facebookLogin);

module.exports = router;
