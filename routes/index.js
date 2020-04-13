var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sharaqi | Home', WTSAM: 'WTSAM.js' });
});

// Feedback
router.get('/mail/feedback', function(req, res, next) {
  res.render('mail/feedback', { title: 'Sharaqi | Home', WTSAM: 'WTSAM.js' });
});

module.exports = router;
