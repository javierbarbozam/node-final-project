const mongoose = require('mongoose');
const movieSchema = require('../schema/Schema')

const urlprueba = 'mongodb+srv://javierbarbozam:LT0gnuK5oXYQGKgN@cluster0.auez1ni.mongodb.net/'

mongoose.connect(urlprueba, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
  
  // cambiar bases de datos
const database = mongoose.connection.useDb('sample_mflix');
  
// const CardModel = database.model('Item', CardSchema, 'movies');
const ItemModel = database.model('Item', movieSchema, 'movies');

// module.exports = CardModel
module.exports = ItemModel


// const password = "STRqWp63KbDX5ATn";
// const uri = `mongodb+srv://javierbarbozam:${password}@cluster0.3zi7sjt.mongodb.net/?retryWrites=true&w=majority`;