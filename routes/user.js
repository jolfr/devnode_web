var express = require('express');
const path = require("path");
var router = express.Router();

var index = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/user.html'));
});

router.post('/projects', function(req, res) {
    res.sendFile(path.join(__dirname+'/projects.html'));
});

router.post('/staff', function(req, res) {
    res.sendFile(path.join(__dirname+'/staff.html'));
});
module.exports = router;
