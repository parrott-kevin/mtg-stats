/**
 *
 * Created by parrott-kevin on 2/8/15.
 */

'use strict';

var models = require('../models');

module.exports = {
  cardInfoIdSet: function() {
    return models.Card.findAll({
      attributes: ['id', 'Name', 'MultiverseId'],
      include: [{model: models.Set, attributes: ['Name']}]
    });
  },
  cardInfo: function(req) {
    var id = req.query.id;
    return models.Card.find({
      where: {id: id},
      include: [models.Set]
    });
  }
};
