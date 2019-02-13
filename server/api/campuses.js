const { Campuses, Students } = require('../db');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campuses.findAll();
    res.json(allCampuses);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campuses.create(req.body);
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

router.delete('/:campusId', async (req, res, next) => {
  try {
    const campusToDelete = await Campuses.findById(req.params.campusId);
    await campusToDelete.destroy();
    res.json(campusToDelete);
  } catch (err) {
    next(err);
  }
});

router.put('/:campusId', async (req, res, next) => {
  try {
    const singleCampus = await Campuses.findById(req.params.campusId);
    const updatedCampus = await singleCampus.update(req.body);
    res.json(updatedCampus);
  } catch (err) {
    next(err);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const singleCampus = await Campuses.findById(req.params.campusId, {
      include: {
        model: Students,
      },
    });
    res.json(singleCampus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;