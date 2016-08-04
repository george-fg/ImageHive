var express = require('express');
var router = express.Router();
var db = require('../data/dbConfig');

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.render('post_form');
});

router.post('/:username', function (req, res) {
  var username = req.params.username
  //this needs to pull in the data from the form
  db.insertPost({imgUrl: 'http://ichef.bbci.co.uk/childrens-responsive-ichef/r/400/1x/cbeebies/topic_sport_logo.png', caption: 'Yay sports!', users_username: username })
    .catch(db.logError)
    res.redirect('/users/' + username)
});

module.exports = router;
