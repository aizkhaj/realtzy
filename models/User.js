const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Client = require('./Client').schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  clients: [Client]
  // each User has a list of clients.
});

const User = mongoose.model('User', userSchema);

module.exports = {model: User, schema: userSchema};