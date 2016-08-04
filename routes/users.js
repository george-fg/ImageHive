var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  router.locals.username = req.params.username
  console.log(router.locals);
  res.render('show_user', {username: req.params.username});
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
