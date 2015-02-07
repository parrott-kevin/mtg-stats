/**
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

var models = require('../models');

module.exports = {
  get: {
    cardInfoIdSet: function(req, res) {
      models.Card.findAll({
        attributes: ['id', 'Name', 'MultiverseId'],
        include: [{model: models.Set, attributes: ['Name']}]
      })
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
      var id = req.query.id;
      console.log(id);
      models.Card.find({
        where: {id: id},
        include: [models.Set]
      })
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
