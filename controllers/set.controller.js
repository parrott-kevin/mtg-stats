/**
 *
 * Created by parrott-kevin on 2/2/15.
 */

'use strict';

var setService = require('../services/set.service');
var _ = require('lodash');

module.exports = {
  get: {
    setInfo: function(req, res) {
      if (_.isEmpty(req.query)) {
        setService.setNameId()
          .then(function(data) {
            res.send(data);
          })
          .catch(function(error) {
            res.send('Error retrieving set name and id');
            console.log(error);
          });
      }
    }
  }
};
