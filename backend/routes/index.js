var express = require('express');
var router = express.Router();
const { receivePublicToken, getTransactions } = require("./controller");

/* GET home page. */
router.get('/', getTransactions);
module.exports = router;
