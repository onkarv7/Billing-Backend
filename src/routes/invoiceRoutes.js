const express = require("express");
const InvoiceController = require("../controllers/invoiceController");

const router = express.Router();

router.post("/", InvoiceController.calculateInvoice);

module.exports = router;
