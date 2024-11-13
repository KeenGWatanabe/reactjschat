const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
},{timestamps: ture});

export const UserModel = mongoose.model('User', UserSchema);