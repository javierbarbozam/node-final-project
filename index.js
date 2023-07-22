const express = require ('express');

// init app
const app = express();

app.listen(3000, () => {
  console.log('App initialized at port 3000 :)');
});

const {connectDb, getDb } = require ('./mongoConnection/connection')

const initializeDb = async () => {
  try {
    await connectDb();
    const database = getDb();
    console.log(database);
    // Aquí puedes continuar con el resto de tu lógica que dependa de la conexión a la base de datos
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

// db connection
// let database; 

// connectDb((err) => {
//   if(!err) {
//     database = getDb();
//   }
// })


const {MongoClient} = require ('mongodb');

const urlprueba = 'mongodb+srv://javierbarbozam:LT0gnuK5oXYQGKgN@cluster0.auez1ni.mongodb.net/'
const client = new MongoClient(urlprueba)

async function getCollection () {
  try {
    const database = client.db('sample_mflix'); // Specify needed database
    const collection = database.collection('movies'); // Specify needed collection
    return collection;
  } catch (err){
    console.log(err);
  } finally {
    // await client.close(); // explicarle a mi vida <3
  }
}

async function prueba () {
  const database = await getCollection()
  const query = {title: 'Back to the Future'};
  const result = await database.findOne(query);
  console.log(result)
}

prueba()

// db connection
// let database; 

// connectDb((err) => {
//   if(!err) {
//     database = getDb();
//   }
// })