/**
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

var cardService = require('../services/card.service');
var _ = require('lodash');

module.exports = {
  get: {
    info: function(req, res) {
      var id = req.query.id;
      var name = req.query.name;
      var setId = req.query.setId;

      // Card by multiverseid
      if (!_.isUndefined(id)) {
        cardService.get.cardInfoId(id)
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
        cardService.get.cardInfoNameSet(name, setId)
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
        cardService.get.cardNameId()
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving card name and mid');
            console.log(error);
          });
      }

      if (!_.isUndefined(name)) {
        cardService.get.cardPartial(name)
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
