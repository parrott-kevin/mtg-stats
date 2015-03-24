/**
 * Created by parrott-kevin on 3/21/15.
 */
(function() {
  'use strict';
  angular
    .module('search.controller', [])
    .controller('SearchController', SearchController);

  SearchController.$inject = [
    'fetchCard',
    '$routeParams'
  ];

  function SearchController(fetchCard, $routeParams) {
    var vm = this;
    var name = $routeParams.name;

    fetchCard.getCardPartial(name).then(function(d) {
      displayCards(angular.fromJson(d.data));
    });

    function displayCards(data) {
      vm.cards = data.rows;
    }

  }

})();
