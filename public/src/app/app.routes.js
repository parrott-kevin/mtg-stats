/**
 *
 * Created by parrott-kevin on 1/6/15.
 */

(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      //.when('/', {
        //templateUrl: 'app/components/home/home.html',
        //controller: 'HomeController',
        //controllerAs: 'vm'
      //})
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
      .otherwise({
        redirectTo: '/'
      });
  }

})();
