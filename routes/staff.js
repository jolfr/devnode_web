var express = require('express');
const path = require("path");
var router = express.Router();

import * as index from 'index.js';

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/staff.html'));
});

router.post('/projects', function(req, res) {
    res.sendFile(path.join(__dirname+'/projects.html'));
});

router.post('/user', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'));
});
module.exports = router;