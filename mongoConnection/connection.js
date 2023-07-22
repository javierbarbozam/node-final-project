const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const password = "STRqWp63KbDX5ATn";
const uri = `mongodb+srv://javierbarbozam:${password}@cluster0.3zi7sjt.mongodb.net/?retryWrites=true&w=majority`;

const urlprueba = 'mongodb+srv://javierbarbozam:LT0gnuK5oXYQGKgN@cluster0.auez1ni.mongodb.net/'

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db("yugiohDB");
//     const data = database.collection("data");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);

// module.exports = run


// VIDEO DE MONGO DB DRIVER ///

let database;

const getDb = () => {
  return database;
}

const connectDb = async () => {
  try {
    const client = await MongoClient.connect(uri);
    database = client.db();
  } catch (err) {
    console.log(err);
  }
  // MongoClient.connect(uri)
  //   .then((client) => {
  //     database = client.db();
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}

module.exports = {
  connectDb, getDb
}