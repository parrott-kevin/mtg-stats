(function() {
  'use strict';

  angular
    .module('fetch-card.factory', [])
    .factory('fetchCard', fetchCard);

  fetchCard.$inject = ['$http'];

  function fetchCard($http) {
    return {
      getCardNameIdSet: getCardNameIdSet,
      getCardInfo: getCardInfo,
      getCardInfoBySet: getCardInfoBySet,
      getCardPartial: getCardPartial
    };

    function getCardNameIdSet() {
      return $http({
        url: '/api/card/search',
        method: 'GET'
      }).success(function(data) {
        return data;
      });
    }

    function getCardInfo(id) {
      return $http({
        url: '/api/card/info',
        method: 'GET',
        params: {
          id: id
        }
      }).success(function(data) {
        return data;
      });
    }

    function getCardInfoBySet(name, setId) {
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
    }

    function getCardPartial(name) {
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
  }
})();
