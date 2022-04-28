const db = require('./db');
const User = require('./models/User');
const Ingredient = require('./models/Ingredient');
const Meal = require('./models/Meal');
const Pantry = require('./models/Pantry');
const Recipe = require('./models/Recipe');
const PantryIngredient = require('./models/PantryIngredient');
const RecipeIngredient = require('./models/RecipeIngredient');
//associations could go here!

User.hasOne(Pantry);
Pantry.belongsTo(User);

User.belongsToMany(Recipe, { through: 'favorite-recipe' });
Recipe.belongsToMany(User, { through: 'favorite-recipe' });

User.belongsToMany(Recipe, { through: Meal });
Recipe.belongsToMany(User, { through: Meal });

Pantry.belongsToMany(Ingredient, { through: PantryIngredient });
Ingredient.belongsToMany(Pantry, { through: PantryIngredient });

Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });
module.exports = {
  db,
  models: {
    User,
    Ingredient,
    Meal,
    Pantry,
    Recipe,
    PantryIngredient,
    RecipeIngredient,
  },
};
