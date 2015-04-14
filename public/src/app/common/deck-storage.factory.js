(function() {
  'use strict';

  angular
    .module('deck-storage.factory', [])
    .factory('deckStorage', deckStorage);

  deckStorage.$inject = [];

  function deckStorage() {
    var deck = [];

    return {
      add: add,
      get: get
    };

    function add(card) {
      var pos = deck.map(function(i) {
          return i.card.Name;
        })
        .indexOf(card.Name);
      if (pos < 0) {
        var obj = {
          card: card,
          qty: 1
        };
        deck.push(obj);
      } else {
        if (deck[pos].qty < 4) {
          deck[pos].qty += 1;
        }
      }
    }

    function get() {
      return deck;
    }

  }
})();
