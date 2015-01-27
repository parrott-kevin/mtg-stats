/**
 * Created by parrott-kevin on 12/27/14.
 */
'use strict';

var fs = require('fs');
var os = require('os');
var _ = require('lodash');

var parseFilePath = '../data/mtg-json/AllSetsArray.json';
var fileKeys = ['layout', 'name', 'manaCost', 'cmc', 'type', 'rarity', 'text', 'flavor', 'artist', 'number', 'power', 'toughness', 'loyalty', 'multiverseid', 'imageName', 'watermark', 'border', 'timeshifted', 'reserved'];
var parsedFilePath = '../data/mtg-json/cards.csv';

var parseFile = JSON.parse(fs.readFileSync(parseFilePath));

var cards = '|cardSet|,|';
cards += _.reduce(fileKeys, function(i, j) {
  return i + '|,|' + j;
});
cards += '|' + os.EOL;

_.forEach(parseFile, function(selectedSet) {
  var setCode = selectedSet.code;
  var setCards = selectedSet.cards;
  _.forEach(setCards, function(selectedCard) {
    var line = '|' + setCode + '|,|';

    _.forEach(fileKeys, function(n) {
      var columnValue = selectedCard[n];

      if ((n === 'reserved' || n === 'timeshifted') && columnValue === true) {
        columnValue = 1;
      }
      //if ((n === _.last(fileKeys)) && _.isUndefined(columnValue)) {
      //  columnValue = 0;
      //} else if (n === _.last(fileKeys) && !_.isUndefined(columnValue)) {
      //  columnValue = 1;
      //}

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
    cards += line;
  });
});

fs.writeFileSync(parsedFilePath, cards);
