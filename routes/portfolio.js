var express = require('express');
var router = express.Router();
var path = require('path')

/* GET portfolio listing. */
router.get('/', function(req, res, next) {
  res.sendFile('portfolio.html', {root: path.join(__dirname, '../public') })
});

/* GET lesfloralies listing. */
router.get('/lesfloralies', function(req, res, next) {
  res.sendFile('lesfloralies.html', {root: path.join(__dirname, '../public/portfolio') })
});

/* GET lesfloralies listing. */
router.get('/loyalwallet', function(req, res, next) {
  res.sendFile('loyalwallet.html', {root: path.join(__dirname, '../public/portfolio') })
});

/* GET lesfloralies listing. */
router.get('/quaestorcoinapp', function(req, res, next) {
  res.sendFile('quaestorcoinapp.html', {root: path.join(__dirname, '../public/portfolio') })
});

module.exports = router;
