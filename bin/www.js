/**
 * Created by parrott-kevin on 2/6/15.
 */

'use strict';

var app = require('../app');
var models = require('../models');

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function() {
  var server = app.listen(app.get('port'), function() {
    console.log('Server started on http://localhost:' + server.address().port);
  });
});
