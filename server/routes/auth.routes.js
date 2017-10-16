const authController = require('../controllers/auth.controller');
const passport = require('passport');
const router = require('express').Router();

// session false as we are not using cookies, using tokens
const requireSignIn = passport.authenticate('local', { session: false });
const facebookSignIn = passport.authenticate('facebook', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

// sign in route - go through passport for auth first
router.route('/login')
  .post(requireSignIn, authController.login);

// register route - create user then login
router.route('/signup')
  .post(authController.signup, authController.login);

// forgot password route - setup reset token and send email
router.route('/forgotten')
  .post(authController.forgotPassword);

// reset password route - reset the password and log in
router.route('/password/reset')
  .post(authController.resetPassword, authController.login);

// redirect route after facebook
router.route('/facebook/login')
  .post(requireAuth, authController.login);

// login route for facebook
router.route('/facebook')
  .get(facebookSignIn);

// sign in after facebook authorizes
router.route('/facebook/callback')
  .get(facebookSignIn, authController.facebookLogin);

module.exports = router;
