var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res) {
  var userName = req.body.username;
  var pass = req.body.password;

  if (userName == 'Admin' && pass == '1234'){
    res.render('result');
  }
  else {
    res.send('Try again!!');
    // res.redirect('index');
  }

});



module.exports = router;
