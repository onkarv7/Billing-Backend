class InvoiceController {
  static calculateInvoice(req, res) {
    const discountManager = req.app.get("discountManager");
    const { customer, items } = req.body;

    const invoice = {
      customer,
      items: [],
      totalAmount: 0,
      savedAmount: 0,
    };

    for (const item of items) {
      const { category, subcategory, name, quantity } = item;
      const categoryObj = discountManager.categories.find(
        (c) => c.name === category
      );
      if (categoryObj) {
        const subcategoryObj = categoryObj.subcategories.find(
          (s) => s.name === subcategory
        );
        if (subcategoryObj) {
          const itemObj = subcategoryObj.items.find((i) => i.name === name);
          if (itemObj) {
            const amount = itemObj.price * quantity;
            const discount =
              Math.max(categoryObj.discount, subcategoryObj.discount) * amount;
            invoice.items.push({ name, quantity, amount });
            invoice.totalAmount += amount;
            invoice.savedAmount += discount;
          }
        }
      }
    }

    res.json(invoice);
  }
}

module.exports = InvoiceController;
