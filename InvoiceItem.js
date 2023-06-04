class InvoiceItem {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
    this.amount = item.price * quantity;
  }
}

module.exports = InvoiceItem;
