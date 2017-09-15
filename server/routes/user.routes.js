const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();


router.route('/users').get(UserController.getUsers);
router.route('/users/:id').get(UserController.getUser);
router.route('/users').post(UserController.newUser);

module.exports = router;
