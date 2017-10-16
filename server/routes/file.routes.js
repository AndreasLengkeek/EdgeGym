const router = require('express').Router();
const FileController = require('../controllers/file.controller');

// file route - downloads file from db
router.route('/:filename')
    .get(FileController.findFile);

module.exports = router;
