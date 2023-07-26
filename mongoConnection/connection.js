const mongoose = require('mongoose');
const CardSchema = require('../schema/Schema');

const password = "STRqWp63KbDX5ATn";
const uri = `mongodb+srv://javierbarbozam:${password}@cluster0.3zi7sjt.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

  const database = mongoose.connection.useDb('yugiohDB');
  
const CardModel = database.model('Item', CardSchema, 'data');

module.exports = CardModel;