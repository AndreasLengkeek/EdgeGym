const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    createddate: { type: Date, default: Date.now, required: true },
    fileid: { type: String, required: true },
    createdby: { type: String, required: true },
    client: { type: String, required: true }
});

module.exports = mongoose.model('Program', ProgramSchema);
