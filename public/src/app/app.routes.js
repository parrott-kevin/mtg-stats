(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/cardInfo/:id', {
        templateUrl: 'app/components/card-info/card-info.html',
        controller: 'CardInfoController',
        controllerAs: 'vm'
      })
      .when('/search/:name', {
        templateUrl: 'app/components/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/deck', {
        templateUrl: 'app/components/deck/deck.html',
        controller: 'DeckController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
