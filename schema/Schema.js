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

 // schema de prueba
 const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
});

module.exports = movieSchema;