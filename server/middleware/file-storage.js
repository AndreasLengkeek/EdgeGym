const multer  = require('multer');
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
Grid.mongo = mongo;
var gfs = Grid(connection.db);

// set up connection to db for file storage
const storage = require('multer-gridfs-storage')({
   db: connection.db
});
// sets file input to single file
const singleUpload = multer({ storage: storage }).single('file');

module.exports = {
    singleUpload,
    gfs
}
