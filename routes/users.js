var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  // res.locals.username = req.params.username
  // console.log("getting the result from locals ", res.locals);
  var posts
  db.getPosts()
  .then(function(data){
    //console.log(data);
    res.render('show_user', {username: req.params.username, posts: data})
  })
  .catch(db.logError)
  //res.render('show_user', {username: req.params.username, posts: posts});
});

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
