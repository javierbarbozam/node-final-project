const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const router = require('./routes/db-routes');

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/cards', router);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen('3000', () => {
  console.log('app listening on port 3000')
})