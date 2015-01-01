'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var morgan = require('morgan');
var multer = require('multer');
var _ = require('lodash');
var dbConfig = require('./config/db-config');

var app = express();

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

app.set('bookshelf', bookshelf);

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(multer());

// For use in other modules
//var bookshelf = app.get('bookshelf');

var SetInfo = bookshelf.Model.extend({
  tableName: 'SetInfo',
  idAttribute: 'id'
});

var CardInfo = bookshelf.Model.extend({
  tableName: 'CardInfo',
  idAttribute: 'id'
});

// Setup the logger
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

// Router
var router = express.Router();

router.get('/', function(req, res) {
  res.send('mtg-stats api up and running');
});

router.get('/set/', function(req, res) {
  var setCode = req.query.setCode;
  if (_.isUndefined(setCode)) {
    new SetInfo()
      .fetchAll()
      .then(function(sets) {
        res.send(sets.toJSON());
      }).catch(function(error) {
        console.log(error);
        res.send('An error occured');
      });
  } else {
    new SetInfo()
      .where('Code', setCode)
      .fetch()
      .then(function(setInfo) {
        res.send(setInfo.toJSON());
      }).catch(function(error) {
        console.log(error);
        res.send('Error retrieving set');
      });
  }

});

router.get('/card/', function(req, res) {
  var name = req.query.name;
  console.log(req.query.name);
  if (_.isUndefined(name)) {
    new CardInfo()
      .fetchAll({columns: ['Name', 'MultiverseId']})
      .then(function(cardInfo) {
        res.send(cardInfo.toJSON());
      }).catch(function(error) {
        console.log(error);
        res.send('Error retrieving all cards');
      });
  } else {
    new CardInfo()
      .where('Name', name)
      .fetch()
      .then(function(cardInfo) {
        res.send(cardInfo.toJSON());
      }).catch(function(error) {
        console.log(error);
        res.send('Error retrieving card');
      });
  }
});

app.use('/api', router);

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Magic happens on port ' + port);
