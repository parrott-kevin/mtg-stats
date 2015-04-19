(function() {
  'use strict';

  angular
    .module('deck-storage.factory', [])
    .factory('deckStorage', deckStorage);

  deckStorage.$inject = ['cardType'];

  function deckStorage(cardType) {
    var deck = {
      Land: [],
      Creature: [],
      Instant: [],
      Sorcery: [],
      Enchantment: [],
      Other: []
    };

    return {
      add: add,
      get: get
    };

    function add(card) {
      var type = cardType.get(card);
      var subDeck = deck[type];
      var pos = subDeck.map(function(i) {
          return i.card.Name;
        })
        .indexOf(card.Name);
      if (pos < 0) {
        var obj = {
          card: card,
          qty: 1
        };
        subDeck.push(obj);
      } else {
        if (subDeck[pos].qty < 4) {
          subDeck[pos].qty += 1;
        }
      }
    }

    function get() {
      return deck;
    }


  }
})();
