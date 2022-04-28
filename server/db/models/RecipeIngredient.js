const Sequelize = require('sequelize');
const db = require('../db');

const RecipeIngredient = db.define(
  'recipe-ingredient',
  {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    unit: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);

module.exports = RecipeIngredient;
