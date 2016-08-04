var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('show_user');
});

router.post('/', function (req, res) {
  var newUser = {
    username : 'Tim'
  };

  db.getUser(newUser)
    .then(function (user) {
      if (user[0]) {
        console.log('user alread exists');
      }
      else {
        // db.insertUser(newUser)
        console.log('user does not exists');
      }
    })
    .catch(db.logError);

});


module.exports = router;
