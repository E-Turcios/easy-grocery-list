const router = require('express').Router();
const decodeToken = require('../auth');
const {
  models: {
    User,
    Ingredient,
    Meal,
    Pantry,
    Recipe,
    PantryIngredient,
    RecipeIngredient,
  },
} = require('../db');

module.exports = router;

router.get('/', decodeToken, async (req, res, next) => {
  try {
    const recipe = await Recipe.findAll();
    res.send(recipe);
  } catch (err) {
    res.next(err);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipe.findOne({
      where: { id: req.params.id },
      include: Ingredient,
    });
    res.send(recipe);
  } catch (err) {
    res.next(err);
  }
});
