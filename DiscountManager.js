class DiscountManager {
  constructor() {
    this.categories = {};
  }

  addCategory(category) {
    this.categories[category.name] = category;
  }

  getDiscountForCategory(categoryName) {
    if (categoryName in this.categories) {
      return this.categories[categoryName].discount;
    }
    return null;
  }

  getDiscountForSubcategory(subcategoryName) {
    for (const category of Object.values(this.categories)) {
      for (const subcategory of category.subcategories) {
        if (subcategory.name === subcategoryName) {
          return subcategory.discount;
        }
      }
    }
    return null;
  }
}

module.exports = DiscountManager;
