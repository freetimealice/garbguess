'use strict';

const db = require('./database');
const Clothing = require('./models/clothing');
const Outfit = require('./models/outfit');


Clothing.belongsToMany(Outfit, {through: 'attire'})
Outfit.belongsToMany(Clothing, {through: 'attire'})

module.exports = {
  db,
  Outfit,
  Clothing
};
