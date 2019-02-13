const { Campuses, Students } = require('../db');
const router = require('express').Router();

router.get('', async (req, res, next) => {
  try {
    const allStudents = await Students.findAll();
    res.json(allStudents);
  } catch (err) {
    next(err);
  }
});

router.post('', async (req, res, next) => {
  try {
    const newStudent = await Students.create(req.body);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:studentId', async (req, res, next) => {
  try {
    const studentToDelete = await Students.findById(req.params.studentId);
    await studentToDelete.destroy();
    res.json(studentToDelete);
  } catch (err) {
    next(err);
  }
});

router.put('/:studentId', async (req, res, next) => {
  try {
    const studentToEdit = await Students.findById(req.params.studentId);
    const updatedStudent = await studentToEdit.update(req.body);
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.get('/:studentId', async (req, res, next) => {
  try {
    const fetchedStudent = await Students.findById(req.params.studentId, {
      include: {
        model: Campuses,
        as: 'campus',
      },
    });
    res.json(fetchedStudent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
