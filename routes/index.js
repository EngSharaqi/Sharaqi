var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sharaqi | Home', WTSAM: 'WTSAM.js', feedback: 'feedback.js', removeTopar: true });
});

// Feedback
router.get('/feedback', function(req, res, next) {
  res.render('feedback', { title: 'Home | Sharaqi', WTSAM: 'WTSAM.js' });
});


removeTopar = ()=>{
  removeTopar = true
}
module.exports = router;
