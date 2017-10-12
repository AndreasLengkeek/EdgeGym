const router = require('express').Router();
const FileController = require('../controllers/file.controller');

router.route('/:filename')
    .get(FileController.findFile);

module.exports = router;
