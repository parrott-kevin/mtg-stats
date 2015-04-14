(function() {
  'use strict';

  angular
    .module('deck.controller', [])
    .controller('DeckController', DeckController);

  DeckController.$inject = ['deckStorage', '_'];

  function DeckController(deckStorage, _) {
    var vm = this;
    vm.deck = deckStorage.get();

    vm.cardType = function(card) {
      var types = _.trim(card.card.Type.split('\u2014')[0]).split(' ');
      if (_.includes(types, 'Creature')) {
        return 'Creature';
      } else {
        return types[0];
      }
    };

  }
})();
