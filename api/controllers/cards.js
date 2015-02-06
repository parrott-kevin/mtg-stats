/**
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

module.exports = function(sequelize) {
  var model = require('../models/card.module')(sequelize);
  var Card = model.Card;

  return {
    get: function(req, res) {
      var id = req.query.id;
      Card.findAll({
        attributes: ['id', 'Name', 'MultiverseId']
      })
        .then(function(data) {
          console.log('Retrieving cards');
          res.send(data);
        })
        .catch(function(error) {
          res.send('Error retrieving card name and mid');
          console.log(error);
        });
    }
  };
};
