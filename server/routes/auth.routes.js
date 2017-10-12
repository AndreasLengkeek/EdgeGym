const authController = require('../controllers/auth.controller');
const router = require('express').Router();


router.route('/login')
  .post(authController.login);

router.route('/signup')
  .post(authController.signup);

module.exports = router;
