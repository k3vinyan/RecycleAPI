const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scanSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  route: String,
  date: { type: Date, default: Date.now },
  entry: Number
});

module.exports = mongoose.model('Scan', scanSchema);
