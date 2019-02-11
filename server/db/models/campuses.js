const db = require('../database');
const Sequelize = require('sequelize');

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
    defaultValue:
      'https://orig00.deviantart.net/8a38/f/2014/231/8/4/mmd_hq_court_yard_stages_download_by_saler1-d7vuwfi.png',
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

module.exports = Campuses
