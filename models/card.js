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
    setInfoId: {
      field: 'SetInfoId',
      type: Sequelize.INTEGER
    },
    layout: {
      field: 'Layout',
      type: Sequelize.STRING
    },
    name: {
      field: 'Name',
      type: Sequelize.STRING
    },
    manaCost: {
      field: 'ManaCost',
      type: Sequelize.STRING
    },
    cmc: {
      field: 'CMC',
      type: Sequelize.DECIMAL(18, 2)
    },
    type: {
      field: 'Type',
      type: Sequelize.STRING
    },
    rarity: {
      field: 'Rarity',
      type: Sequelize.STRING
    },
    text: {
      field: 'Text',
      type: Sequelize.TEXT
    },
    flavor: {
      field: 'Flavor',
      type: Sequelize.TEXT
    },
    artist: {
      field: 'Artist',
      type: Sequelize.STRING
    },
    number: {
      field: 'Number',
      type: Sequelize.STRING
    },
    power: {
      field: 'Power',
      type: Sequelize.STRING
    },
    toughness: {
      field: 'Toughness',
      type: Sequelize.STRING
    },
    loyalty: {
      field: 'Loyalty',
      type: Sequelize.INTEGER
    },
    multiverseId: {
      field: 'MultiverseId',
      type: Sequelize.STRING
    },
    imageName: {
      field: 'ImageName',
      type: Sequelize.STRING
    },
    watermark: {
      field: 'Watermark',
      type: Sequelize.STRING
    },
    border: {
      field: 'Border',
      type: Sequelize.STRING
    },
    timeshifted: {
      field: 'Timeshifted',
      type: Sequelize.BOOLEAN
    },
    reserved: {
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
