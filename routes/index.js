var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/data', function(req, res){
  res.render('profile',{data: req.body});
});

module.exports = router;
