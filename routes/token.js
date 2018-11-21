var express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');    //cache for session token, see npm node-cache
const path = require("path");

var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = router;