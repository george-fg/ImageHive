var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');
var app = require('../app')

/* GET users listing. */

router.get('/:input', function(req, res, next) {
  var input = req.params.input
  if(isNaN(parseInt(input))){
    res.render('post_form', {username: input});
  }else {
  db.getPostById(input)
    .then(function(post) {
      res.render('user_post', post[0]);
    })
  }
});

router.post('/', function (req, res) {
  db.insertPost({imgUrl: req.body.image, caption: req.body.caption, users_username: req.body.username })
    .catch(db.logError)
    res.redirect('/users/' + req.body.username)
});

module.exports = router;
