const Sequelize = require('sequelize');
const db = require('../db');

const Meal = db.define(
  'meal',
  {
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: Sequelize.DATEONLY,
    },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);

module.exports = Meal;
