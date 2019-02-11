'use strict';

const db = require('./database');
const Campuses = require('./models/campuses');
const Students = require('./models/students');

Students.belongsTo(Campuses, { as: 'campus' });
Campuses.hasMany(Students, { foreignKey: 'campusId' });

module.exports = {
  db,
  Campuses,
  Students,
};
