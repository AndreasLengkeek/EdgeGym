const multer  = require('multer');
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
Grid.mongo = mongo;
var gfs = Grid(connection.db);

const storage = require('multer-gridfs-storage')({
   db: connection.db
});
const singleUpload = multer({ storage: storage }).single('file');

module.exports = {
    singleUpload,
    gfs
}
