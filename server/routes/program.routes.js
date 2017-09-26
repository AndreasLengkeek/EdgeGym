const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();
const { singleUpload } = require('../middleware/file-storage');


router.route('/programs')
    .get(ProgramController.getPrograms)
    .post(ProgramController.newProgram);

router.route('/programs/:id')
    .get(ProgramController.findProgramById)
    .put(singleUpload, ProgramController.connectProgramFile)
    .delete(ProgramController.deleteProgramById);

module.exports = router;
