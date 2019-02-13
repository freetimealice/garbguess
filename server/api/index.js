'use strict';

const router = require('express').Router();
const { Campuses, Students } = require('../db');

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

router.post('/students', async (req, res, next) => {
  try {
    const newStudent = await Students.create(req.body);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.post('/campuses', async (req, res, next) => {
  try {
    const newCampus = await Campuses.create(req.body);
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

router.delete('/students/:studentId', async (req, res, next) => {
  try {
    const studentToDelete = await Students.findById(req.params.studentId);
    await studentToDelete.destroy();
    res.json(studentToDelete);
  } catch (err) {
    next(err);
  }
});

router.delete('/campuses/:campusId', async (req, res, next) => {
  try {
    const campusToDelete = await Campuses.findById(req.params.campusId);
    await campusToDelete.destroy();
    res.json(campusToDelete);
  } catch (err) {
    next(err);
  }
});

router.put('/students/:studentId', async (req, res, next) => {
  try {
    const singleStudent = await Students.findById(req.params.studentId);
    const updatedStudent = await singleStudent.update(req.body);
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.put('/campuses/:campusId', async (req, res, next) => {
  try {
    const singleCampus = await Campuses.findById(req.params.campusId);
    const updatedCampus = await singleCampus.update(req.body);
    res.json(updatedCampus);
  } catch (err) {
    next(err);
  }
});

router.get('/students/:studentId', async (req, res, next) => {
  try {
    const singleStudent = await Students.findById(req.params.studentId, {
      include: {
        model: Campuses,
        as: 'campus',
      },
    });
    res.json(singleStudent);
  } catch (err) {
    next(err);
  }
});

router.get('/campuses/:campusId', async (req, res, next) => {
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

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
