/**
 * Abstraced file for server routing
 */
var path = require('path');
var router = require('express').Router();

/*
  Dummy api to test server
 */
router.get('/api/counters', function(req, res) {
    var counter = { count: 1 };
    res.json(counter);
});

/*
  Base route to connect to app spa front-end
 */
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
