var express = require('express');
const path = require("path");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.post('/myprofile', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'));
});

module.exports = router;
