const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }] 
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
