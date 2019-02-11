'use strict';

const router = require('express').Router();
const { db, Campuses, Students } = require('../db');

router.get('/students', async (req, res, next) => {
  try {
    const allStudents = await Students.findAll();
    res.json(allStudents);
  } catch (err) {
    next(err);
  }
});

router.get('/campuses', async (req, res, next) => {
  try {
    const allCampuses = await Campuses.findAll();
    res.json(allCampuses);
  } catch (err) {
    next(err);
  }
});
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
