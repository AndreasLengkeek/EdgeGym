const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: false },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  gender: { type: String, required: false },
  coach: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports =  mongoose.model('Client', ClientSchema);
