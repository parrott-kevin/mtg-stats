/**
 * Created by parrott-kevin on 2/5/15.
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Set = sequelize.define('Set', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      field: 'Name',
      type: DataTypes.STRING
    },
    Code: {
      field: 'Code',
      type: DataTypes.STRING
    },
    GathererCode: {
      field: 'GathererCode',
      type: DataTypes.STRING
    },
    OldCode: {
      field: 'OldCode',
      type: DataTypes.STRING
    },
    ReleaseDate: {
      field: 'ReleaseDate',
      type: DataTypes.DATE
    },
    Border: {
      field: 'Border',
      type: DataTypes.STRING
    },
    SetType: {
      field: 'SetType',
      type: DataTypes.STRING
    },
    Block: {
      field: 'Block',
      type: DataTypes.STRING
    },
    OnlineOnly: {
      field: 'OnlineOnly',
      type: DataTypes.BOOLEAN
    }
  }, {
    tableName: 'SetInfo',
    timestamps: false
  });

  return Set;
};
