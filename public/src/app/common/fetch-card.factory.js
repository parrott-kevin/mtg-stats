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
          url: '/api/card/search',
          method: 'GET'
        }).success(function(data) {
          return data;
        });
      },
      getCardInfo: function(id) {
        return $http({
          url: '/api/card/info',
          method: 'GET',
          params: {
            id: id
          }
        }).success(function(data) {
          return data;
        });
      },
      getCardInfoBySet: function(name, setId) {
        return $http({
          url: '/api/card/info',
          method: 'GET',
          params: {
            name: name,
            setId: setId
          }
        }).success(function(data) {
          return data;
        });
      },
      getCardPartial: function(name) {
        return $http({
          url: '/api/card/search',
          method: 'GET',
          params: {
            name: name
          }
        }).success(function(data) {
          return data;
        });
      }
    };
  }
})();
