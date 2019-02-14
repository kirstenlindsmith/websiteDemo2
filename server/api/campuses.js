const router = require('express').Router();
const { Campus } = require('../db/models');

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

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Whoops! Something went wrong!');
});
