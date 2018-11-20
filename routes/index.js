var express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');    //cache for session token, see npm node-cache
const path = require("path");

var router = express.Router();

exports.myCache = new NodeCache();


const backendURL = 'https://devnode-backend-test.herokuapp.com/';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.post('/myprofile', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'));
});

module.exports = router;

function connectBackend(id_token) {
    axios.post(backendURL + '/login/oauth/access_token?id_token=${id_token}',{
        token: id_token
    })
        .then((response) => {
            const session_token = response.data.session_token;
            const expire_token = response.data.expire_token;

            setTokens(myCache, session_token, expire_token)
        })
        .catch((error) => {
            console.error(error)
        });
}

exports.setTokens = function (tokenCache, session_token, expire_token) {
    tokenCache.set("session_token", session_token, function ( err, success) {
        if ( !err && success){
            console.log( success )
        }
    });
    tokenCache.set("expire_token", expire_token, function ( err, success) {
        if ( !err && success){
            console.log( success )
        }
    });
};