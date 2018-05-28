var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// add html engine for html page...
app.engine('.html', require('ejs').renderFile); 
// app.engine('html', require('ejs').__express);
// app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/admin/:a', function(req,res){
  console.log(req.params.a)
  res.render('admin/'+ req.params.a, { title: 'Express' });
});

app.get('/:channel/:page', function (req, res, next) {
  let channel = req.params.channel;
  let page = req.params.page;
  if (page.slice(-5) == '.html') {
    page = page.slice(0, -5);
  } else {
    next();
    return;
  }
  console.log('visit ---' + page + '')
  res.render(channel + '/' + page);
});

app.get('/404.html', function(req,res,next){
  res.render('404.html')
});
app.get('/500.html', function(req,res,next){
    res.render('500.html')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
