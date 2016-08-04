var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  var posts
  db.getPosts()
  .then(function(data){
    res.render('show_user', {username: req.params.username,
      posts: data.filter
      (function(post) {
        return post.users_username.toLowerCase() == req.params.username.toLowerCase()
      })
      .reverse()
    })
  .catch(db.logError)
  })
})

router.get('/:username/feed', function(req, res, next) {
  var posts
  db.getPosts()
  .then(function(data){
    res.render('user_feed', {username: req.params.username,
      posts: data.reverse()
    })
  .catch(db.logError)
  })
})

router.post('/', function (req, res) {
  var username = req.body.name
  db.getUser(username)
    .then(function (user) {
      if (!user[0]) {
          db.insertUser(username)
          .catch(db.logError);
      }
    })
    .catch(db.logError);
    res.redirect('/users/' + username)
});

module.exports = router;
