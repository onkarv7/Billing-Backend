const Category = require("./Category");
const Subcategory = require("./Subcategory");
const Item = require("./Item");
const Discount = require("./Discount");

const discountManager = require("./DiscountManager");

function initializeData() {
  const discountManager = new DiscountManager();

  // Category - Produce
  const produceCategory = new Category(
    "Produce",
    new Discount("percentage", 10)
  );

  // Subcategories - Fruits and Vegetables
  const fruitsSubcategory = new Subcategory(
    "Fruits",
    new Discount("percentage", 18)
  );
  const vegetablesSubcategory = new Subcategory(
    "Vegetables",
    new Discount("percentage", 5)
  );

  // Items under Fruits subcategory
  fruitsSubcategory.addItem(new Item("Apple", 250.0, "Kg"));
  fruitsSubcategory.addItem(new Item("Orange", 128.0, "Kg"));

  // Items under Vegetables subcategory
  vegetablesSubcategory.addItem(new Item("Potato", 30.0, "Kg"));
  vegetablesSubcategory.addItem(
    new Item("Tomato", 70.0, "Kg", new Discount("percentage", 10))
  );

  // Adding subcategories to the Produce category
  produceCategory.addSubcategory(fruitsSubcategory);
  produceCategory.addSubcategory(vegetablesSubcategory);

  // Adding the Produce category to the discount manager
  discountManager.addCategory(produceCategory);

  // Category - Dairy
  const dairyCategory = new Category("Dairy", new Discount("percentage", 15));

  // Subcategories - Milk and Cheese
  const milkSubcategory = new Subcategory(
    "Milk",
    new Discount("percentage", 20)
  );
  const cheeseSubcategory = new Subcategory(
    "Cheese",
    new Discount("percentage", 20)
  );

  // Items under Milk subcategory
  milkSubcategory.addItem(new Item("Cow Milk", 50.0, "Lt"));
  milkSubcategory.addItem(
    new Item("Soy Milk", 40.0, "Lt", new Discount("percentage", 10))
  );

  // Items under Cheese subcategory
  cheeseSubcategory.addItem(new Item("Cheddar", 50.0, "Kg"));
  cheeseSubcategory.addItem(
    new Item("Gouda", 80.0, "Kg", new Discount("percentage", 10))
  );

  // Adding subcategories to the Dairy category
  dairyCategory.addSubcategory(milkSubcategory);
  dairyCategory.addSubcategory(cheeseSubcategory);

  // Adding the Dairy category to the discount manager
  discountManager.addCategory(dairyCategory);

  return discountManager;
}

module.exports = initializeData;
