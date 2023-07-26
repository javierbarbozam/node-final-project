const express = require('express');
const router = require('./routes/db-routes');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/cards', router);

app.listen('3000', () => {
  console.log('app listening on port 3000')
})