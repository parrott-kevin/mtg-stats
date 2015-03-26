/**
 * Created by parrott-kevin on 3/21/15.
 */
(function() {
  'use strict';
  angular
    .module('search.controller', ['ui.bootstrap'])
    .controller('SearchController', SearchController);

  SearchController.$inject = [
    'fetchCard',
    '_',
    '$routeParams'
  ];

  function SearchController(fetchCard, _, $routeParams) {
    var vm = this;
    var name = $routeParams.name;

    fetchCard.getCardPartial(name).then(function(d) {
      displayCards(angular.fromJson(d.data));
    });

    function displayCards(data) {
      console.log(data);
      vm.cards = _.sortBy(data.rows, 'Name');
    }

  }

})();
