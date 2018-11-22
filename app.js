var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var projectsRouter = require('./routes/projects');
var staffRouter = require('./routes/staff');
var tokenRouter = require('./routes/token');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/contactform", express.static(__dirname + '/contactform'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/font", express.static(__dirname + '/font'));
app.use("/ico", express.static(__dirname + '/ico'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/skins", express.static(__dirname + '/skins'));
app.use("/routes", express.static(__dirname + '/routes'));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/projects', projectsRouter);
app.use('/staff', staffRouter);
app.use('/token', tokenRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
