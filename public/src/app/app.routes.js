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
        controllerAs: 'vm',
        resolve: {
          cardNameIdSet: cardNameIdSet,
          setNameId: setNameId
        }
      })
      .when('/search/:name', {
        templateUrl: 'app/components/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm',
        resolve: {
          cardSearch: cardSearch
        }
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

  cardNameIdSet.$inject = ['fetchCard'];
  function cardNameIdSet(fetchCard) {
    return fetchCard.getCardNameIdSet().then(function(d) {
      return angular.fromJson(d.data);
    });
  }

  setNameId.$inject = ['fetchSet'];
  function setNameId(fetchSet) {
    return fetchSet.getSetNameId().then(function(d) {
      return angular.fromJson(d.data);
    });
  }

  cardSearch.$inject = ['$route', 'fetchCard'];
  function cardSearch($route, fetchCard) {
    var name = $route.current.params.name;
    return fetchCard.getCardPartial(name).then(function(d) {
      return angular.fromJson(d.data);
    });
  }

})();
