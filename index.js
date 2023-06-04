// const express = require("express");
// const bodyParser = require("body-parser");
// const initializeData = require("./src/data/discountData");
// const invoiceRoutes = require("./src/routes/invoiceRoutes");

// const app = express();
// app.use(bodyParser.json());

// // Initialize data and store it in the app
// app.set("discountManager", initializeData());

// // Routes
// app.use("/invoice", invoiceRoutes);

// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome to the Supermarket Billing System");
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const initializeData = require("./discountData");
const Invoice = require("./Invoice");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Supermarket Billing API");
});

app.post("/invoice", (req, res) => {
  const discountManager = initializeData();

  const { customer, items } = req.body;

  const invoice = new Invoice(customer);
  for (const item of items) {
    const { category, subcategory, name, quantity } = item;
    const itemObj = discountManager.getItem(category, subcategory, name);
    if (itemObj) {
      invoice.addItem(itemObj, quantity);
    }
  }

  const totalAmount = invoice.calculateTotalAmount();
  const discount = invoice.calculateDiscount();
  const savedAmount = totalAmount - discount;

  const response = {
    customer,
    items: invoice.items,
    totalAmount,
    savedAmount,
  };

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
