/**
 *
 * Created by parrott-kevin on 1/26/15.
 */

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

// Sequelize setup
var Sequelize = require('sequelize');
var dbConfig = require('./config/db-config.sequelize');
var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {logging: false});

var setConfig = require('./models/set');
var SetInfo = sequelize.define('SetInfo', setConfig.fields, setConfig.table);

var cardConfig = require('./models/card');
var CardInfo = sequelize.define('CardInfo', cardConfig.fields, cardConfig.table);

// Router
var router = express.Router();

router.get('/', function(req, res) {
  res.send('mtg-stats api up and running');
});

router.get('/card/', function(req, res) {
  var id = req.query.id;
  CardInfo.belongsTo(SetInfo, {foreignKey: 'SetInfoId'});
  sequelize.sync().done(function() {
    if (_.isUndefined(id)) {
      CardInfo.findAll({
        attributes: ['id', 'Name', 'MultiverseId'],
        include: [{model: SetInfo, attributes: ['Name']}]
      })
      .then(function(data) {
        console.log('Retrieving cards');
        res.send(data);
      })
      .catch(function(error) {
        res.send('Error retrieving card name and mid');
        console.log(error);
      });
    } else {
      CardInfo.find({
        where: {id: id},
        include: [SetInfo]
      })
      .then(function(cardInfo) {
        res.send(cardInfo);
      }).catch(function(error) {
        res.send('Error retrieving card');
        console.log(error);
      });
    }
  });
});

router.get('/set/', function(req, res) {
  var name = req.query.name;
  if (_.isUndefined(name)) {
    SetInfo.findAll({
      include: ['CardInfo']
      })
      .then(function(data) {
        res.send(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});

app.use('/api', router);

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Server started on http://localhost:' + port);
