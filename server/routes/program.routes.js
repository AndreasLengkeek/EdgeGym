const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();
const { singleUpload } = require('../middleware/file-storage');


router.route('/programs')
    .get(ProgramController.getPrograms)
    .post(singleUpload, ProgramController.newProgram);

router.route('/programs/:id')
    .get(ProgramController.findProgramById)
    .delete(ProgramController.deleteProgramById);

module.exports = router;
