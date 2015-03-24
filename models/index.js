/**
 *
 * Created by parrott-kevin on 2/6/15.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var dbConfig = require('../config/db-config.sequelize')[env];
var Sequelize = require('sequelize');
var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
