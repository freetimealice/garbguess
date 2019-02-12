const db = require('../database');
const Sequelize = require('sequelize');

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg',
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },
  description: Sequelize.TEXT,
});
module.exports = Students;
