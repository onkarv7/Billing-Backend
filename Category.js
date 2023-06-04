class Category {
  constructor(name, discount) {
    this.name = name;
    this.discount = discount;
    this.subcategories = [];
  }

  addSubcategory(subcategory) {
    this.subcategories.push(subcategory);
  }
}

module.exports = Category;
