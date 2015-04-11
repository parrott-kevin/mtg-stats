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
      var id = card.id;
      var pos = deck.map(function(i) { return i.id; }).indexOf(id);
      if (pos < 0) {
        var obj = {
          id: id,
          card: card,
          qty: 1
        };
        deck.push(obj);
      } else {
        deck[pos].qty += 1;
      }
    }

    function get() {
      return deck;
    }

  }
})();
