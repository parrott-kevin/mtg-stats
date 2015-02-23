/**
 * Created by parrott-kevin on 2/18/15.
 */

'use strict';

var models = require('../models');

module.exports = {
  setNameId: function () {
    return models.Set.findAll({
      attributes: [
        'id',
        'Name'
      ]
    });
  }
};
