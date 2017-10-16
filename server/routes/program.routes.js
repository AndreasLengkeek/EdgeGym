const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();
const { singleUpload } = require('../middleware/file-storage');

// index and create routes for programs
router.route('/programs')
    .get(ProgramController.getPrograms)
    .post(singleUpload, ProgramController.newProgram);

// read route for programs
router.route('/programs/:id')
    .get(ProgramController.findProgramById);

module.exports = router;
