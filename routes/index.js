var express = require('express');
const NodeCache = require('node-cache');    //cache for session token, see npm node-cache
const path = require("path");

var router = express.Router();

exports.myCache = new NodeCache();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.post('/myprofile', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'));
});

module.exports = router;

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var id_token = googleUser.getAuthResponse().id_token;
    console.log('User Token: ' + id_token);
    connectBackend(id_token);
    $("#mySignin").modal("hide");
}

function connectBackend(id_token) {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://devnode-backend-test.herokuapp.com/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
    };
    json = JSON.stringify({ user_token: id_token});
    console.log(json);
    xhr.send();
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