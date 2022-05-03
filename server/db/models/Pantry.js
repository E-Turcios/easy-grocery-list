const db = require('../db');

const Pantry = db.define(
  'pantry',
  {},
  { timestamps: false, createdAt: false, updatedAt: false }
);

module.exports = Pantry;
