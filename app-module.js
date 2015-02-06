/**
 * Created by parrott-kevin on 2/5/15.
 */

'use strict';

var express = require('express');
var Sequelize = require('sequelize');
var dbConfig = require('./config/db-config.sequelize');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {logging: false});

var cards = require('./api/controllers/cards')(sequelize);
var sets = require('./api/controllers/sets')(sequelize);

var router = express.Router();

sequelize.sync().done(function(err) {
  router.get('/card/', cards.get);
  router.get('/set/', sets.get);

  app.use('/api', router);
  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Server started on http://localhost:' + port);
});
