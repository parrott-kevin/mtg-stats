/**
 * Created by parrott-kevin on 2/18/15.
 */

(function() {
  'use strict';

  angular
    .module('fetch-set.factory', [])
    .factory('fetchSet', fetchSet);

  fetchSet.$inject = ['$http'];

  function fetchSet($http) {
    return {
      getSetNameId: function() {
        return $http({
          url: '/api/set/',
          method: 'GET'
        }).success(function(data) {
          return data;
        });
      }
    };
  }

})();
