class Customer {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItem(item, quantity) {
    this.items.push({ item, quantity });
  }
}

module.exports = Customer;
