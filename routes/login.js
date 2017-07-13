var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', {partials:{
		header:'../views/partials/header.hjs',
		navbar:'../views/partials/navbar.hjs',
		footer:'../views/partials/footer.hjs',
	}});
});

module.exports = router;
