const UserController = require('../controllers/user.controller');
const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();

// read and create routes for users (create is for coach users instead of client users)
router.route('/users')
    .get(UserController.getUsers)
    .post(UserController.createUser);

// read and update routes for users
router.route('/users/:id')
    .get(UserController.getUserById)
    .put(UserController.checkVersion, UserController.updateUser)
    .delete(UserController.removeUser);

// get programs with user id
router.route('/users/:id/programs')
    .get(ProgramController.getProgramsByUser);


module.exports = router;
