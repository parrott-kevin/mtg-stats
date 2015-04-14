(function() {
  'use strict';

  angular
    .module('fetch-set.factory', [])
    .factory('fetchSet', fetchSet);

  fetchSet.$inject = ['$http'];

  function fetchSet($http) {

    return {
      getSetNameId: getSetNameId
    };

    function getSetNameId() {
      return $http.get('/api/set/').success(function (data) {
        return data;
      });
    }
  }

})();
