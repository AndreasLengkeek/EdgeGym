const express = require('express');
const ProgramController = require('../controllers/program.controller');
const router = express.Router();

router.route('/programs')
    .get(ProgramController.getPrograms)
    .post(ProgramController.newProgram);

router.route('/programs/:id')
    .get(ProgramController.findProgramById)
    .delete(ProgramController.deleteProgramById);

module.exports = router;
