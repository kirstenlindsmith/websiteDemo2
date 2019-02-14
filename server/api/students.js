const router = require('express').Router();
const { Student } = require('../db/models');

module.exports = router;

//GET api/students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//GET api/students/#
router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: {
        id: req.params.studentId,
      },
    });
    res.json(student);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Whoops! Something went wrong!');
});
