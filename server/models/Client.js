const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  email: { type: String, required: false },
  password: { type: String, required: false },
  firstname: { type: String, required: [true, "First Name is required"] },
  lastname: { type: String, required: [true, "Last Name is required"] },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  gender: { type: String, required: false },
  coach: { type: Schema.Types.ObjectId, ref: 'User', required: [true, "A coach must be specified"] }
});

module.exports =  mongoose.model('Client', ClientSchema);
