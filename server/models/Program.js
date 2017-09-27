const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Createdby = new Schema({
//     name: String,
//     id: String
// });

const ProgramSchema = new Schema({
    createddate: { type: Date, default: Date.now, required: true },
    fileid: { type: String, required: true },
    createdby: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true }
});

module.exports = mongoose.model('Program', ProgramSchema);
