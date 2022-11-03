const express = require("express");
const router = express.Router();
const handler = require("../handlers/index");

router.post("/create-access-token", handler.createAccessTokenHandler);
router.post("/direct-pay", handler.directPayHandler);
router.post("/create-order", handler.createOrderHandler);
router.post("/list-payment-plans", handler.listPaymentPlans);

module.exports = router;
