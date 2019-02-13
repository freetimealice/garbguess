const db = require('../database');
const Sequelize = require('sequelize');

const getRandomImage = () => {
  let num = Math.floor(Math.random() * 4) + 1
  return `/images/campuses/misc/${num}.jpg`
}

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: getRandomImage()
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: Sequelize.TEXT,
});

module.exports = Campuses;
