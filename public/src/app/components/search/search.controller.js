(function() {
  'use strict';
  angular
    .module('search.controller', ['ui.bootstrap'])
    .controller('SearchController', SearchController);

  SearchController.$inject = [
    'cardImage',
    'deckStorage',
    'cardSearch',
    '_'
  ];

  function SearchController(cardImage, deckStorage, cardSearch, _) {
    var vm = this;

    vm.cards = searchResults(cardSearch);

    vm.addCard = function(card) {
      deckStorage.add(card);
    };

    function searchResults(data) {
      var cards = _.sortBy(data.rows, 'Name');

      _.forEach(cards, function(card) {
        card.ImageLink = cardImage.link(card.MultiverseId);
      });

      return cards;
    }

  }

})();
