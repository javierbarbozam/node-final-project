const express = require('express');
const router = require('./routes/db-routes');

const app = express()

app.use('/api/movies', router)

app.listen('3000', () => {
  console.log('app listening on port 3000')
})

// const mongoose = require('mongoose');
// const urlprueba = 'mongodb+srv://javierbarbozam:LT0gnuK5oXYQGKgN@cluster0.auez1ni.mongodb.net/'

// mongoose.connect(urlprueba, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Conexión exitosa a MongoDB'))
//   .catch(err => console.error('Error al conectar a MongoDB:', err));


  
//   // Definir el esquema de la colección "movies"
//   const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//   });
  
//   const db = mongoose.connection.useDb('sample_mflix');
//   const ItemModel = db.model('Item', movieSchema, 'movies');

// // Ruta GET para obtener todos los documentos de la colección "movies"
// app.get('/api/movies', async (req, res) => {
//   try {
//     // Obtener todos los documentos de la colección "movies"
//     const movies = await ItemModel.find().select('title year');
//     res.json(movies);
//   } catch (err) {
//     console.error('Error al obtener los documentos de la colección:', err);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// });