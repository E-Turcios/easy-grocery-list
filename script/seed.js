'use strict';

const {
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
} = require('../server/db');

async function seed() {
  await db.sync({ forced: true });

  const steak = await Recipe.create({
    name: 'When Steak Met Potatoes and Creamed Kale with Peppercorn Sauce',
    instructions:
      '\n 1) Wash and dry all produce. Preheat oven to 400 degrees. Cut potatoes into ¾-inch-thick wedges. Remove and discard stems and ribs from kale. Chop or tear leaves into 1-inch pieces. Halve, peel, and mince shallot. Use a mallet or heavy pan to pound and crush peppercorns in their bag until coarsely ground. \n 2) Toss potatoes with a drizzle of oil and a pinch of salt and pepper on a baking sheet or baking dish. Roast in oven until tender and lightly browned, 30-35 minutes, tossing halfway through. \n 3) Melt 1 TBSP butter in a large pan over medium heat. Add kale and a splash of water. Cook until leaves are completely wilted and very tender, 4-5 minutes. Season with salt and pepper. Remove from heat, keeping kale in pan. \n 4) Heat a drizzle of oil in a medium pan over medium-high heat. Season steak all over with salt and pepper. Add to pan and cook to desired doneness, 4-7 minutes per side. Remove from pan and set aside to rest, 5 minutes. \n 5) Heat another drizzle of oil in same pan. Add shallot and ¼ tsp crushed peppercorns (more or less to taste). Cook until shallots are soft, 2-3 minutes. Add stock concentrate and ½ cup water. Scrape up any browned bits from pan. Bring to a simmer and let bubble until reduced by half, 2-3 minutes. Remove pan from heat, then stir in half the sour cream. \n 6) Return pan with kale to medium heat. When just warmed, remove from heat and stir in remaining sour cream. Season with salt and pepper. Slice steak against the grain. Divide between plates and serve next to potatoes and kale. Drizzle with sauce.',
    servingSize: 2,
    imageUrl:
      'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/peppercorn-steak-w06-e4014085.jpg',
  });

  const [SirloinSteak, isSirloinSteak] = await Ingredient.findOrCreate({
    where: { item: 'Sirloin Steak' },
  });
  const [Kale, isKale] = await Ingredient.findOrCreate({
    where: { item: 'Kale' },
  });
  const [YukonGoldPotatoes, isYukonGoldPotatoes] =
    await Ingredient.findOrCreate({
      where: {
        item: 'Yukon Gold Potatoes',
      },
    });
  const [Shallot, isShallot] = await Ingredient.findOrCreate({
    where: { item: 'Shallot' },
  });
  const [SourCream, isSourCream] = await Ingredient.findOrCreate({
    where: { item: 'Sour Cream' },
  });
  const [BlackPeppercorns, isBlackPeppercorns] = await Ingredient.findOrCreate({
    where: {
      item: 'Black Peppercorns',
    },
  });
  const [BeefStockConcentrate, isBeefStockConcentrate] =
    await Ingredient.findOrCreate({
      where: {
        item: 'Beef Stock Concentrate',
      },
    });
  const [Salt, isSalt] = await Ingredient.findOrCreate({
    where: { item: 'Salt' },
  });
  const [Pepper, isPepper] = await Ingredient.findOrCreate({
    where: { item: 'Pepper' },
  });
  const [VegetableOil, isVegetableOil] = await Ingredient.findOrCreate({
    where: { item: 'Vegetable Oil' },
  });
  const [Butter, isButter] = await Ingredient.findOrCreate({
    where: { item: 'Butter' },
  });

  await steak.addIngredient(SirloinSteak, {
    through: { quantity: 12, unit: 'ounce' },
  });
  await steak.addIngredient(Kale, {
    through: { quantity: 4, unit: 'ounce' },
  });
  await steak.addIngredient(YukonGoldPotatoes, {
    through: { quantity: 1, unit: 'unit' },
  });
  await steak.addIngredient(Shallot, {
    through: { quantity: 4, unit: 'tablespoon' },
  });
  await steak.addIngredient(SourCream, {
    through: { quantity: 1, unit: 'half ounce' },
  });
  await steak.addIngredient(BlackPeppercorns, {
    through: { quantity: 1, unit: 'unit' },
  });
  await steak.addIngredient(BeefStockConcentrate, {
    through: { quantity: 1, unit: 'unit' },
  });
  await steak.addIngredient(Salt, {
    through: { quantity: 1, unit: 'unit' },
  });
  await steak.addIngredient(Pepper, {
    through: { quantity: 1, unit: 'tablespoon' },
  });
  await steak.addIngredient(VegetableOil, {
    through: { quantity: 1, unit: 'ounce' },
  });
  await steak.addIngredient(Butter, {
    through: { quantity: 1, unit: 'ounce' },
  });

  console.log('db synced!');
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
