const express = require ('express');
const router = express.Router();
const {connectDb, getDb} = require ('../mongoConnection/connection');

// db connection
let database; 

connectDb((err) => {
  if(!err) {
    database = getDb();
  }
})