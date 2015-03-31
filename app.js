/**
 * Created by parrott-kevin on 2/5/15.
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./config/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, 'public/dist')));

app.use('/api', routes);

module.exports = app;
