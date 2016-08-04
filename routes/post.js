var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */

router.get('/:input', function(req, res, next) {
  var input = req.params.input
  console.log('this is what you get if you parseint the param: ', parseInt(input));
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
  console.log("this is req.body: ", req.body);
  db.insertPost({imgUrl: req.body.image, caption: req.body.caption, users_username: req.body.username })
    .catch(db.logError)
    res.redirect('/users/' + req.body.username)
});

module.exports = router;
