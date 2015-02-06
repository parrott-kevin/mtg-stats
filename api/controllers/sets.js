/**
 *
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

module.exports = function(sequelize) {
  var model = require('../models/set.module')(sequelize);
  var Set = model.Set;

  return {
    get: function(req, res) {
      Set.findAll({
        //include: ['CardInfo']
      })
        .then(function(data) {
          res.send(data);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };
};
