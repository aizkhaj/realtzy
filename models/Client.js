const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  userId: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  type: String,
  date: {type: Date, default: Date.now}
});

const Client = mongoose.model('Client', clientSchema);

module.exports = {model: Client, schema: clientSchema};