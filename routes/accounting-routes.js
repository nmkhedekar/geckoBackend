const express = require("express");
const { getInvoices, getBills, getExpenses, getRevenue } = require("../controllers/accounting-controller");

const router = express.Router();

router.route("/get-invoices").get(getInvoices);
router.route("/get-bills").get(getBills);
router.route("/get-expenses").get(getExpenses);
router.route("/get-revenue").get(getRevenue);

module.exports = router;