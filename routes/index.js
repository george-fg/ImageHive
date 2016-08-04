var express = require('express');
var router = express.Router();
var config = require('../knexfile' ).development
var knex = require('knex')(config)
var tables = require('../tables')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'ImageHive!' });
});

router.get('/postform', function(req, res, next) {
  res.render('post_form', { title: 'ImageHive!' });
});

router.get('/userpost', function(req, res, next) {
  res.render('user_post', { title: 'ImageHive!', id: 3, users_username: "Frank", imgUrl: "http://i.imgur.com/5a1slAa.png", caption: "Hey! its a train!" });
});


//  res.render('user_post', { title: 'ImageHive!', id: 3, name: "Frank", img_url: "http://i.imgur.com/5a1slAa.png", caption: "Hey! its a train!" });




module.exports = router;
