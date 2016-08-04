var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.render('post_form', {username: req.params.username});
});

router.post('/', function (req, res) {
  console.log("this is req.body: ", req.body);
  //this needs to pull in the data from the form
  db.insertPost({imgUrl: req.body.image, caption: req.body.caption, users_username: req.body.username })
    .catch(db.logError)
    res.redirect('/users/' + req.body.username)
});

module.exports = router;
