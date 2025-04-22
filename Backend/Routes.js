import express from 'express';
import Item from './Model.js'
import Login from './LoginModel.js'

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
//login routes
router.post('/login', async (req, res) => {
  console.log(req,'body')
try {
  const newLogin = new Login(req.body);
  const savedLogin = await newLogin.save();
  res.status(201).json(savedLogin);
} catch (err) {
  res.status(500).json({ message: err.message });
}
});

// GET: Fetch all items
router.get('/login', async (req, res) => {
try {
  const Logins = await Login.find();
  const data=res.json(Logins);
} catch (err) {
  res.status(500).json({ message: err.message });
}
});

export default router;
