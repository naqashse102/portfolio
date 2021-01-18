var express = require('express');
var router = express.Router();
var path = require('path')

/* GET portfolio listing. */
router.get('/', function(req, res, next) {
  res.sendFile('cv.html', {root: path.join(__dirname, '../public') })
});

module.exports = router;
