var express = require('express');
var router = express.Router();

/* GET messages listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Post message. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
