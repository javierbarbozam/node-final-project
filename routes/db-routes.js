const express = require('express');
const router = express.Router();
const ItemModel = require('../mongoConnection/connection');

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  const element = await ItemModel.find({_id: id});
  if (element) {
    res.json(element);
  } else {
    res.status(404).json({ error: "Couldn't find the cart. Please try later." });
  }
});

router.get('/type/:type', async (req, res) => {
  const { type } = req.params;
  const element = await ItemModel.find({type: type});
  if (element) {
    res.json(element);
  } else {
    res.status(404).json({ error: `Couldn't find cards by type ${type}. Please try later.` });
  }
});

router.get('/', async (req, res) => {
  try {
    const cards = await ItemModel.find().select('title');
    res.json(cards);
  } catch (err) {
    console.error('Error al obtener los documentos de la colección:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const element = await ItemModel.deleteOne({_id: id});

    if(element) {

    }
  } catch (err) {console.log(err)}
});

module.exports = router;