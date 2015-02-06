/**
 * Created by parrott-kevin on 1/26/15.
 */

'use strict';
var Sequelize = require('Sequelize');

var card = {
  fields: {
    id: {
      field: 'id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    SetInfoId: {
      field: 'SetInfoId',
      type: Sequelize.INTEGER
    },
    Layout: {
      field: 'Layout',
      type: Sequelize.STRING
    },
    Name: {
      field: 'Name',
      type: Sequelize.STRING
    },
    ManaCost: {
      field: 'ManaCost',
      type: Sequelize.STRING
    },
    CMC: {
      field: 'CMC',
      type: Sequelize.DECIMAL(18, 2)
    },
    Type: {
      field: 'Type',
      type: Sequelize.STRING
    },
    Rarity: {
      field: 'Rarity',
      type: Sequelize.STRING
    },
    Text: {
      field: 'Text',
      type: Sequelize.TEXT
    },
    Flavor: {
      field: 'Flavor',
      type: Sequelize.TEXT
    },
    Artist: {
      field: 'Artist',
      type: Sequelize.STRING
    },
    Number: {
      field: 'Number',
      type: Sequelize.STRING
    },
    Power: {
      field: 'Power',
      type: Sequelize.STRING
    },
    Toughness: {
      field: 'Toughness',
      type: Sequelize.STRING
    },
    Loyalty: {
      field: 'Loyalty',
      type: Sequelize.INTEGER
    },
    MultiverseId: {
      field: 'MultiverseId',
      type: Sequelize.STRING
    },
    ImageName: {
      field: 'ImageName',
      type: Sequelize.STRING
    },
    Watermark: {
      field: 'Watermark',
      type: Sequelize.STRING
    },
    Border: {
      field: 'Border',
      type: Sequelize.STRING
    },
    Timeshifted: {
      field: 'Timeshifted',
      type: Sequelize.BOOLEAN
    },
    Reserved: {
      field: 'Reserved',
      type: Sequelize.BOOLEAN
    }
  },
  table:{
    tableName: 'CardInfo',
    timestamps: false
  }
};

module.exports = card;
