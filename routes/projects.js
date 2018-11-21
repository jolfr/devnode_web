var express = require('express');
const path = require("path");
var router = express.Router();

var index = require('./index');


router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/projects.html'));
});

router.post('/user', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'));
});

router.post('/staff', function(req, res) {
    res.sendFile(path.join(__dirname+'/staff.html'));
    index.setTokens(index.myCache); //TODO Figure out why this line was put in
});
module.exports = router;