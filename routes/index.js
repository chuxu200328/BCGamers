var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { biaoqian: 'yu' });
=======
  res.render('index', {partials:{
		header:'../views/partials/header.hjs',
		navbar:'../views/partials/navbar.hjs',
		footer:'../views/partials/footer.hjs',
	}});
>>>>>>> 71465bf9f45713cc904df09e09f47ec628e0fd27
});

module.exports = router;
