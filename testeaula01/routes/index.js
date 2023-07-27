var express = require('express');
var router = express.Router();

function inicializar() {
  if(!global.languages) {
    global.languages = [];
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  inicializar();
  
  res.render('index', { title: 'Node its cool', languages: global.languages });
});

router.post('/', function(req, res, next) {

})

module.exports = router;
