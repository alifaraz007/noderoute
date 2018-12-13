var express = require('express');
var router = express.Router();
var products = require('../public/json/products');
var productAds = require('../public/json/productads');
var exchangeData = require('../public/json/exchangedata');

/* GET users listing. */
router.get('/:filename', function (req, res, next) {
  if (req.params.filename == "products") {
    res.json(products);
  } else if (req.params.filename == "productads") {
    res.json(productAds);
  } else if (req.params.filename == "exchangedata") {
    res.json(exchangeData);
  } else {
    res.status(400).json('check file name');
  }
});

module.exports = router;
