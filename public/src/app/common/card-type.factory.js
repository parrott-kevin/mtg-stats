(function(){
  'use strict';

  angular
    .module('card-type.factory', [])
    .factory('cardType', cardType);

  cardType.$inject = ['_'];

  function cardType(_) {

    return {
      get: get
    };

    function get(card) {
      var types = ['Land', 'Creature', 'Instant', 'Sorcery', 'Enchantment', 'Other'];
      var cardTypes = _.trim(card.Type.split('\u2014')[0]).split(' ');

      var typeIndex = types.length;
      cardTypes.forEach(function(elm) {
        var currentIndex = _.indexOf(types, elm);
        if(currentIndex < typeIndex && currentIndex >= 0) {
          typeIndex = currentIndex;
        }
      });

      return types[typeIndex];
    }

  }

})();
