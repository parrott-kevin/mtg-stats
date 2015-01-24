'use strict';

// Requires
var bodyParser = require('body-parser');
var fs = require('fs');
var _ = require('lodash');
var path = require('path');

// Express setup
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};
app.use(allowCrossDomain);

// Bookshelf setup
var dbConfig = require('./config/db-config.bookshelf');

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

app.set('bookshelf', bookshelf);

var SetInfo = bookshelf.Model.extend({
  tableName: 'SetInfo',
  idAttribute: 'id'
});

var CardInfo = bookshelf.Model.extend({
  tableName: 'CardInfo',
  idAttribute: 'id'
});

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
  if (_.isUndefined(name)) {
    new CardInfo()
      .fetchAll({columns: ['Name', 'MultiverseId']})
      .then(function(cardInfo) {
        console.log('send CardInfo');
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
        console.log('sending specific card');
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
console.log('Server started on http://localhost:' + port);
