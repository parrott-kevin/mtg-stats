/**
 * Created by parrott-kevin on 4/4/15.
 */

(function() {
  'use strict';

  angular
    .module('deck.controller', [])
    .controller('DeckController', DeckController);

  DeckController.$inject = ['deckStorage'];

  function DeckController(deckStorage) {
    var vm = this;
    vm.deck = deckStorage.get();
  }
})();
