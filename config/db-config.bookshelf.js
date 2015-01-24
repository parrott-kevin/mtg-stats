/**
 * Created by parrott-kevin on 12/30/14.
 */
'use strict';

var dbConfig = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'mtg-stats',
    charset: 'utf8'
  }
};

module.exports = dbConfig;
