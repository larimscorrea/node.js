var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Node its cool', idade: 10 });
});

router.post('/', function(req, res, next) {

})

module.exports = router;
