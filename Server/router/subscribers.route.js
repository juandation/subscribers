const express = require("express");
const router = express.Router();
const subscribersCtrl = require("../Controllers/subscribers.controller");

router.get('/', subscribersCtrl);


module.exports = router;