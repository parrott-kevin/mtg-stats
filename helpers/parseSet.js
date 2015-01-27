/**
 * Created by parrott-kevin on 12/27/14.
 */
'use strict';

var fs = require('fs');
var os = require('os');
var _ = require('lodash');

var parseFilePath = '../data/mtg-json/AllSetsArray.json';
var fileKeys = ['name', 'code', 'gathererCode', 'oldCode', 'releaseDate', 'border', 'type', 'block', 'onlineOnly'];
var parsedFilePath = '../data/mtg-json/sets.csv';

var parseFile = JSON.parse(fs.readFileSync(parseFilePath));
var sets = '|';
sets += _.reduce(fileKeys, function(i, j) {
  return i + '|,|' + j;
});

_.forEach(parseFile, function(selectedSet) {
  var line = '|';

  _.forEach(fileKeys, function(n) {
    var columnValue = selectedSet[n];

    if ((n === _.last(fileKeys)) && _.isUndefined(columnValue)) {
      columnValue = 0;
    } else if (n === _.last(fileKeys) && !_.isUndefined(columnValue)) {
      columnValue = 1;
    }

    if (_.isUndefined(columnValue)) {
      line += '';
    } else {
      line += columnValue;
    }

    if (n !== _.last(fileKeys)) {
      line += '|,|';
    } else {
      line += '|' + os.EOL;
    }
  });
  sets += line;
});

fs.writeFileSync(parsedFilePath, sets);
