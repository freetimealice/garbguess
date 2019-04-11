const { Clothing} = require('../db');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const allClothes = await Clothing.findAll();
    res.json(allClothes);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newClothing = await Clothing.create(req.body);
    res.json(newClothing);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
