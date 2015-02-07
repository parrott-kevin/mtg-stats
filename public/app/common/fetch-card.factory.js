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
      getCardNameIdSet: function() {
        return $http({
          url: '/api/card/cardInfoIdSet',
          method: 'GET',
          cache: true
        }).success(function(data) {
          return data;
        });
      },
      getCardInfo: function(id) {
        return $http({
          url: '/api/card/',
          method: 'GET',
          params: {id: id}
        }).success(function(data) {
          return data;
        });
      }
    };
  }
})();
