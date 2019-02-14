const router = require('express').Router();
const { Campus, Student } = require('../db/models');

module.exports = router;

//GET api/campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//GET api/campuses/#
router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findOne({
      where: {
        id: req.params.campusId,
      },
    });
    res.json(campus);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//GET api/campuses/#/students
router.get('/:campusId/students', async(req,res,next)=> {
  try {
    const students = await Student.findAll({
      where: {
        campusId: req.params.campusId
      }
    })
    res.json(students)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Whoops! Something went wrong!');
});
