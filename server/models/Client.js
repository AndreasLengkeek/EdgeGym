const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  phone: { type: String, required: false },
  address: { type: String, required: false },
  gender: { type: String, required: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: [true, "A user must be specified"] },
  coach: { type: Schema.Types.ObjectId, ref: 'User', required: [true, "A coach must be specified"] }
});

module.exports =  mongoose.model('Client', ClientSchema);
