const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: false },
  email: { type: String, required: false },
  passwordHash: { type: String, required: true },
  address: { type: String, required: false },
  gender: { type: String, required: false },
  coach: { type: String, required: true },
  expiry: { type: Date, default: Date.now, required: true }
});

module.exports =  mongoose.model('Client', ClientSchema);
