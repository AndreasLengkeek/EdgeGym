const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    createddate: { type: Date, default: Date.now, required: true },
    fileid: { type: String, required: true },
    createdby: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Program', ProgramSchema);
