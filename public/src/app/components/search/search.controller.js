(function() {
  'use strict';
  angular
    .module('search.controller', ['ui.bootstrap'])
    .controller('SearchController', SearchController);

  SearchController.$inject = [
    'fetchCard',
    'cardImage',
    '_',
    '$routeParams'
  ];

  function SearchController(fetchCard, cardImage, _, $routeParams) {
    var vm = this;
    var name = $routeParams.name;

    fetchCard.getCardPartial(name).then(function(d) {
      searchResults(angular.fromJson(d.data));
    });

    function searchResults(data) {
      vm.cards = _.sortBy(data.rows, 'Name');

      _.forEach(vm.cards, function(card) {
        card.ImageLink = cardImage.link(card.MultiverseId);
      });
    }

  }

})();
