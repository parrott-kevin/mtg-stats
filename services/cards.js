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
  },
  cardPartial: function(req) {
    var name = req.query.name;
    //var offset = req.query.offset;
    //var limit = req.query.limit;
    var limit = 10;
    return models.Card.findAndCountAll({
      where: {
        Name: {
          like: '%' + name + '%'
        }
      },
      //offset: offset,
      limit: limit
    });
  }
};
