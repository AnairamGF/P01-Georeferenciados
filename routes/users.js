var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This section is for the users... if only it worked');
});

router.get('/details', function(req, res, next) {
  res.send('This site can show details in order to expose come more information');
});

module.exports = router;
