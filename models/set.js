/**
 *
 * Created by parrott-kevin on 1/26/15.
 */

'use strict';
var Sequelize = require('Sequelize');
var setInfo = {
  fields:{
    id: {
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      field: 'Name',
      type: Sequelize.STRING
    },
    code: {
      field: 'Code',
      type: Sequelize.STRING
    },
    gathererCode: {
      field: 'GathererCode',
      type: Sequelize.STRING
    },
    oldCode: {
      field: 'OldCode',
      type: Sequelize.STRING
    },
    releaseDate: {
      field: 'ReleaseDate',
      type: Sequelize.DATE
    },
    border: {
      field: 'Border',
      type: Sequelize.STRING
    },
    setType: {
      field: 'SetType',
      type: Sequelize.STRING
    },
    block: {
      field: 'Block',
      type: Sequelize.STRING
    },
    onlineOnly: {
      field: 'OnlineOnly',
      type: Sequelize.BOOLEAN
    }
  },
  table:{
    tableName: 'SetInfo',
    timestamps: false
  }
};
module.exports = setInfo;
