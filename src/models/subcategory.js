class Subcategory {
  constructor(name, discount) {
    this.name = name;
    this.discount = discount;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

module.exports = Subcategory;
