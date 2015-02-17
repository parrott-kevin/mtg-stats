/**
 *
 * Created by parrott-kevin on 2/5/15.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      SetInfoId: {
        field: 'SetInfoId',
        type: DataTypes.INTEGER
      },
      Layout: {
        field: 'Layout',
        type: DataTypes.STRING
      },
      Name: {
        field: 'Name',
        type: DataTypes.STRING
      },
      ManaCost: {
        field: 'ManaCost',
        type: DataTypes.STRING
      },
      CMC: {
        field: 'CMC',
        type: DataTypes.DECIMAL(18, 2)
      },
      Type: {
        field: 'Type',
        type: DataTypes.STRING
      },
      Rarity: {
        field: 'Rarity',
        type: DataTypes.STRING
      },
      Text: {
        field: 'Text',
        type: DataTypes.TEXT
      },
      Flavor: {
        field: 'Flavor',
        type: DataTypes.TEXT
      },
      Artist: {
        field: 'Artist',
        type: DataTypes.STRING
      },
      Number: {
        field: 'Number',
        type: DataTypes.STRING
      },
      Power: {
        field: 'Power',
        type: DataTypes.STRING
      },
      Toughness: {
        field: 'Toughness',
        type: DataTypes.STRING
      },
      Loyalty: {
        field: 'Loyalty',
        type: DataTypes.INTEGER
      },
      MultiverseId: {
        field: 'MultiverseId',
        type: DataTypes.INTEGER
      },
      ImageName: {
        field: 'ImageName',
        type: DataTypes.STRING
      },
      Watermark: {
        field: 'Watermark',
        type: DataTypes.STRING
      },
      Border: {
        field: 'Border',
        type: DataTypes.STRING
      },
      Timeshifted: {
        field: 'Timeshifted',
        type: DataTypes.BOOLEAN
      },
      Reserved: {
        field: 'Reserved',
        type: DataTypes.BOOLEAN
      },
      Printings: {
        field: 'Printings',
        type: DataTypes.TEXT
      },
      OriginalText: {
        field: 'OriginalText',
        type: DataTypes.TEXT
      },
      OriginalType: {
        field: 'OriginalType',
        type: DataTypes.STRING
      },
      Source: {
        field: 'Source',
        type: DataTypes.STRING
      }
    }, {
      tableName: 'CardInfo',
      timestamps: false,
      classMethods: {
        associate: function(models) {
          Card.belongsTo(models.Set, {foreignKey: 'SetInfoId'});
        }
      }
    });

  return Card;
};
