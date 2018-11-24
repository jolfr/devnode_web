const express = require('express');
const path = require('path');
const webpack = require('webpack');

const app = express();

const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('./webpack.config.js');

app.use(webpackMiddleware(
    webpack(webpackConfig),
    { publicPath: '/' }
));

app.use(express.static('public'));

// Removed the '/' route

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'))
});

// Added this route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'))
});

app.listen(8080, () => console.log('Server listening on 8080'));