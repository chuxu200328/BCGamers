var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', {partials:{
		header:'../views/partials/header.hjs',
		navbar:'../views/partials/navbar.hjs',
		footer:'../views/partials/footer.hjs',
	}});
});

module.exports = router;
