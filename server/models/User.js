const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PermissionSchema = new mongoose.Schema({
    role: String,
    updatedAt: { type: Date, default: Date.now }
},{ _id: false });

const UserSchema = new mongoose.Schema({
    username: { type: String, required: [true, "Username is required"] },
    firstname: { type: String, required: [true, "Firstname is required"]},
    lastname: { type: String, required: [true, "Lastname is required"] },
    email: { type: String, required: false },
    password: { type: String, required: false },
    resetPassword: String,
    facebookId: String,
    permissions: PermissionSchema
});

/**
 * Compare the passed password with the value in the database. A model method.
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
