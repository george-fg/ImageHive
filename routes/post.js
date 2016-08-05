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
}
);router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id
  db.getPostById(id)
    .then(function(post) {
      res.render('edit_form', post[0]);
  })
});

router.post('/:id', function (req, res) {
  var postToEdit = {}
  var changesObj = req.body
  db.getPostById(req.params.id)
    .then(function(posts) {
      postToEdit = posts[0]
      db.editPost(postToEdit, changesObj)
      .catch(db.logError)
      res.redirect('/post/' + postToEdit.id)
    })
    .catch(db.logError);
});


router.post('/', function (req, res) {
  db.insertPost({imgUrl: req.body.image, caption: req.body.caption, users_username: req.body.username })
    .catch(db.logError)
    res.redirect('/users/' + req.body.username)
});

module.exports = router;
