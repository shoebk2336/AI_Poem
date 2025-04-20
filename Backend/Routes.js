import express from 'express';
import Item from './Model.js'

const router = express.Router();


// POST: Create an item
router.post('/', async (req, res) => {
    console.log(req,'body')
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Fetch all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
