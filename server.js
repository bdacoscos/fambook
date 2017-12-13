var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');

const user = require('./routes/api/users')

var app = express();

app.use(logger('dev'));

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

// Mount our custom auth middleware
app.use(require('./config/auth'));
// Put API routes here, before "catch all" route
app.use('/api/users', require ('./routes/api/users'));
app.use('/api/families', require ('./routes/api/families'));


// The following "catch all" route is necessary for
// a SPA's client-side routing to properly work
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
var port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});