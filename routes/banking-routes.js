const express = require("express");
const { getBankAccounts } = require("../controllers/banking-controller");

const router = express.Router();

router.route("/get-bankAccounts").get(getBankAccounts);

module.exports = router