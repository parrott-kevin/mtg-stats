/**
 *
 * Created by parrott-kevin on 2/8/15.
 */

'use strict';

var models = require('../models');
var Sequelize = require('sequelize');

module.exports = {
  cardNameId: function() {
    return models.Card.findAll({
      attributes: [
        'id',
        'Name',
        'MultiverseId'
        ],
      group: ['Name'],
      order: [
        Sequelize.fn('MAX', Sequelize.col('MultiverseId'))
      ]
    });
  },
  cardInfoNameSet: function(name, setId) {
    return models.Card.find({
      where: {
        Name: name,
        SetInfoId: setId
      },
      include: [models.Set]
    });
  },
  cardInfoId: function(id) {
    return models.Card.find({
      where: {id: id},
      include: [models.Set]
    });
  },
  cardPartial: function(name) {
    return models.Card.findAndCountAll({
      where: {
        Name: {
          like: '%' + name + '%'
        }
      }
    });
  }
};
