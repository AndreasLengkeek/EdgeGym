const UserController = require('../controllers/user.controller');
const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();

router.route('/users')
    .get(UserController.getUsers)
    .post(UserController.createUser);

router.route('/users/:id')
    .get(UserController.getUserById)
    .put(UserController.checkVersion, UserController.updateUser)
    .delete(UserController.removeUser);

router.route('/users/:id/programs')
    .get(ProgramController.getProgramsByUser);


module.exports = router;
