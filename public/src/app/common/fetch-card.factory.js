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
      return $http.get('/api/card/search').success(function(data) {
        return data;
      });
    }

    function getCardInfo(id) {
      return $http.get('/api/card/info', {
        params: {
          id: id
        }
      }).success(function(data) {
        return data;
      });
    }

    function getCardInfoBySet(name, setId) {
      return $http.get('/api/card/info', {
        params: {
          name: name,
          setId: setId
        }
      }).success(function(data) {
        return data;
      });
    }

    function getCardPartial(name) {
      return $http.get('/api/card/search', {
        params: {
          name: name
        }
      }).success(function(data) {
        return data;
      });
    }
  }
})();
