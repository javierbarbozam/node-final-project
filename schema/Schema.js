const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: String,
  type: String,
  battle_points: {
    attack: Number,
    defense: Number
  },
  description: String
});

module.exports = CardSchema;