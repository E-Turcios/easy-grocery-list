const Sequelize = require('sequelize');
const db = require('../db');

const Recipe = db.define(
  'recipe',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    servingSize: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue:
        'https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);

module.exports = Recipe;
