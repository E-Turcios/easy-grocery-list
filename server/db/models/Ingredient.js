const Sequelize = require('sequelize');
const db = require('../db');

const Ingredient = db.define(
  'ingredient',
  {
    item: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);

module.exports = Ingredient;
