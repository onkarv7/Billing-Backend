const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Item = require("../models/item");

function initializeData() {
  const discountManager = {};

  const produceCategory = new Category("Produce", 0.1);
  const fruitsSubcategory = new Subcategory("Fruits", 0.18);
  const vegSubcategory = new Subcategory("Vegetables", 0.05);

  const potato = new Item("Potato", 30, "Kg");
  const tomato = new Item("Tomato", 70, "Kg");

  vegSubcategory.addItem(potato);
  vegSubcategory.addItem(tomato);

  produceCategory.addSubcategory(fruitsSubcategory);
  produceCategory.addSubcategory(vegSubcategory);

  const dairyCategory = new Category("Dairy", 0.15);
  const milkSubcategory = new Subcategory("Milk", 0.2);
  const cheeseSubcategory = new Subcategory("Cheese", 0.2);

  const cowMilk = new Item("Cow Milk", 50, "Lt");
  const soyMilk = new Item("Soy Milk", 40, "Lt");
  const cheddar = new Item("Cheddar", 50, "Kg");
  const gouda = new Item("Gouda", 80, "Kg");

  milkSubcategory.addItem(cowMilk);
  milkSubcategory.addItem(soyMilk);
  cheeseSubcategory.addItem(cheddar);
  cheeseSubcategory.addItem(gouda);

  dairyCategory.addSubcategory(milkSubcategory);
  dairyCategory.addSubcategory(cheeseSubcategory);

  discountManager.categories = [produceCategory, dairyCategory];

  return discountManager;
}

module.exports = initializeData;
