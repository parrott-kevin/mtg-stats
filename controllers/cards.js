/**
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

var cards = require('../services/cards');
var _ = require('lodash');

module.exports = {
  get: {
    info: function(req, res) {
      if (!_.isUndefined(req.query.id)) {
        cards.cardInfo(req)
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving card');
            console.log(error);
          });
      }
      if (!_.isUndefined(req.query.name) && !_.isUndefined(req.query.setId)) {
        cards.cardInfo(req)
          .then(function(data) {
            res.send(data);
          }).catch(function(error) {
            console.log(error);
          });
      } else {
        cards.cardPartial(req)
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving card partial');
            console.log(error);
          });
      }
    },
    search: function(req, res) {

      // Get initial card info for typeahead
      if (_.isEmpty(req.query)) {
        cards.cardNameId()
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving card name and mid');
            console.log(error);
          });
      }
    }
  }
};
