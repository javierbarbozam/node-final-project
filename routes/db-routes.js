const express = require('express');
const router = express.Router();
const CardModel = require('../mongoConnection/connection');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const element = await CardModel.find({_id: id});
  if (element) {
    res.json(element);
  } else {
    res.status(404).json({ error: "Couldn't find the cart. Please try later." });
  }
});

router.get('/:type', async (req, res) => {
  const { type } = req.params;
  const element = await CardModel.find({type: type});
  if (element) {
    res.json(element);
  } else {
    res.status(404).json({ error: `Couldn't find cards by type ${type}. Please try later.` });
  }
});

router.get('/', async (req, res) => {
  try {
    const cards = await CardModel.find({});
    res.json(cards);
  } catch (err) {
    console.error('Could not complete task:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const element = await CardModel.deleteOne({_id: id});
    res.json(element);
  } catch (err) {
    console.error('Could not complete task:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const element = await CardModel.UpdateOne({_id: id}, {$set: req.body});
    res.json(element);
  } catch (err) {
    console.error('Could not complete task:', err);
    res.status(500).json({ error: 'Could not complete task'});
  }
});

router.post('/', async (req, res) => {
  try {
    const element = req.body;
    await CardModel.create(element);
    res.json(element);
  } catch (err) {
    console.error('Could not complete task:', err);
    res.status(500).json({ error: 'Could not complete task'});
  }
});

module.exports = router;