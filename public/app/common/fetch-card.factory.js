/**
 * Created by parrott-kevin on 1/19/15.
 */
(function() {
  'use strict';

  angular
    .module('fetch-card.factory', [])
    .factory('fetchCard', fetchCard);

  fetchCard.$inject = ['$http'];

  function fetchCard($http) {
    return {
      getCardNameId: function() {
        return $http({
          url: '/api/card/',
          method: 'GET'
        }).success(function(data) {
          return data;
        });

      },
      getCardInfo: function(cardName) {
        return $http({
          url: '/api/card/',
          method: 'GET',
          params: {name: cardName}
        }).success(function(data) {
          return data;
        });

      }
    };
  }
})();
