var path = require('path');
var router = require('express').Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.post('/login', function(req, res){
res.sendFile(path.join(__dirname, '../../client/login.html'));
});

module.exports = router;
