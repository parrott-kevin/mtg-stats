/**
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

var cards = require('../services/cards');
var _ = require('lodash');

module.exports = {
  get: {
    info: function(req, res) {
      var id = req.query.id;
      var name = req.query.name;
      var setId = req.query.setId;

      // Card by multiverseid
      if (!_.isUndefined(id)) {
        cards.cardInfoId(id)
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving card');
            console.log(error);
          });
      }
      // Card by name and set
      if (!_.isUndefined(name) && !_.isUndefined(setId)) {
        cards.cardInfoNameSet(name, setId)
          .then(function(data) {
            res.send(data);
          }).catch(function(error) {
            console.log(error);
          });
      }
    },
    search: function(req, res) {
      var name = req.query.name;

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

      if (!_.isUndefined(name)) {
        cards.cardPartial(name)
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving card partial');
            console.log(error);
          });
      }
    }
  }
};
