const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = User;
