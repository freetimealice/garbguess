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
      'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj5oNOBhLTgAhUlmuAKHdHwA_AQjRx6BAgBEAU&url=https%3A%2F%2Fwww.anime-planet.com%2Fcharacters%2Fusagi-tsukino&psig=AOvVaw3TWu0F9PwQhDTRI7Q7p-41&ust=1549986539992915',
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
