/**
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

var cards = require('../services/cards');

module.exports = {
  get: {
    cardInfoIdSet: function(req, res) {
      cards.cardInfoIdSet()
        .then(function(data) {
          console.log('Retrieving cards');
          res.send(data);
        })
        .catch(function(error) {
          res.send('Error retrieving card name and mid');
          console.log(error);
        });
    },
    cardInfo: function(req, res) {
      cards.cardInfo(req)
        .then(function(data) {
          res.send(data);
        })
        .catch(function(error) {
          res.send('Error retrieving card');
          console.log(error);
        });
    }
  }

};
