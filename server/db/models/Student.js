const Sequelize = require('sequelize')
const db = require('../database')
const Campus = require('./Campus')

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.kh13.com/uploads/monthly_2018_10/large.gallery_61785_2263_210142.png.5d73aefb67486503ea8ffdb198b01561.png'
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
}, {
  defaultScope: {
    include: [{ model: Campus }]
  }
})
