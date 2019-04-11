const db = require('../database');
const Sequelize = require('sequelize');

const Outfit = db.define('outfit', {
color: {
    type: Sequelize.ENUM('red', 'orange', 'yellow', 'green', 'blue', 'purple'),
  }
});

module.exports = Outfit;
