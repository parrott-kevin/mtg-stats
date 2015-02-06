/**
 * Created by parrott-kevin on 2/5/15.
 */

'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Set = sequelize.define('Set', {
    id: {
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      field: 'Name',
      type: Sequelize.STRING
    },
    Code: {
      field: 'Code',
      type: Sequelize.STRING
    },
    GathererCode: {
      field: 'GathererCode',
      type: Sequelize.STRING
    },
    OldCode: {
      field: 'OldCode',
      type: Sequelize.STRING
    },
    ReleaseDate: {
      field: 'ReleaseDate',
      type: Sequelize.DATE
    },
    Border: {
      field: 'Border',
      type: Sequelize.STRING
    },
    SetType: {
      field: 'SetType',
      type: Sequelize.STRING
    },
    Block: {
      field: 'Block',
      type: Sequelize.STRING
    },
    OnlineOnly: {
      field: 'OnlineOnly',
      type: Sequelize.BOOLEAN
    }
  },
  {
    tableName: 'SetInfo',
    timestamps: false
  });

  return {
    Set: Set
  };
};
