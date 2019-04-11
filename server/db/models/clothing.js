const db = require('../database');
const Sequelize = require('sequelize');

const Clothing = db.define('clothing',
{ name: {
    type: Sequelize.STRING,
    },
  type: {
    type: Sequelize.ENUM('top', 'bottom', 'accessory'),
  },
  warmness: {
    type: Sequelize.ENUM('light', 'medium', 'heavy'),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://previews.123rf.com/images/hatza/hatza1308/hatza130800410/21393984-cartoon-female-clothing.jpg'
  },
  color: {
    type: Sequelize.ENUM('red', 'orange', 'yellow', 'green', 'blue', 'purple'),
  }})

module.exports = Clothing
;
