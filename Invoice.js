class Invoice {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
  }

  addItem(item, quantity) {
    this.items.push(new InvoiceItem(item, quantity));
  }

  calculateTotalAmount() {
    let total = 0;
    for (const item of this.items) {
      total += item.amount;
    }
    return total;
  }

  calculateDiscountedAmount() {
    const total = this.calculateTotalAmount();
    const discount = this.calculateDiscount();
    return total - discount;
  }

  calculateDiscount() {
    let discount = 0;
    for (const item of this.items) {
      discount += this.calculateItemDiscount(item);
    }
    return discount;
  }

  calculateItemDiscount(invoiceItem) {
    const item = invoiceItem.item;
    let itemDiscount = 0;

    // Check for category discount
    const categoryDiscount = item.discount.getDiscountForCategory(
      item.category
    );
    if (categoryDiscount) {
      itemDiscount = this.applyDiscount(invoiceItem, categoryDiscount);
    }

    // Check for subcategory discount
    const subcategoryDiscount = item.discount.getDiscountForSubcategory(
      item.subcategory
    );
    if (subcategoryDiscount) {
      itemDiscount = this.applyDiscount(invoiceItem, subcategoryDiscount);
    }

    return itemDiscount;
  }

  applyDiscount(invoiceItem, discount) {
    if (discount.discountType === "percentage") {
      return invoiceItem.amount * (discount.value / 100);
    } else {
      return discount.value;
    }
  }
}

module.exports = Invoice;
