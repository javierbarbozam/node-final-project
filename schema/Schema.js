const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  name: String,
  type: String,
  attack: Number,
  defense: Number,
  description: String,
});

module.exports = CardSchema;