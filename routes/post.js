var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.render('post_form');
});

router.post('/', function (req, res) {
  var username = req.params.username
  console.log(username);
  //this needs to pull in the data from the form
  db.insertPost({imgUrl: '', caption: '', users_username: username })
    .catch(db.logError)
    res.redirect('/users/' + username)
});

module.exports = router;
