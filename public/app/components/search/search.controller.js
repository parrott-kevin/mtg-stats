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
    'displayCard',
    '_',
    '$routeParams'
  ];

  function SearchController(fetchCard, displayCard, _, $routeParams) {
    var vm = this;
    var name = $routeParams.name;

    fetchCard.getCardPartial(name).then(function(d) {
      searchResults(angular.fromJson(d.data));
    });

    function searchResults(data) {
      vm.cards = _.sortBy(data.rows, 'Name');
      _.forEach(data.rows, function(i) {
        console.log(displayCard.display(i).imgsrc);
      });
    }

  }

})();
