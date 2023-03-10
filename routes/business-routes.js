const express = require("express");
const { getBusinesses, getBusinessInfo } = require("../controllers/business-controller");

const router = express.Router();

router.route("/businesses").get(getBusinesses);

module.exports = router