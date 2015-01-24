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
        var promise = $http.get('/api/card').success(function(data) {
          return data;
        });

        return promise;
      }
    };
  }
})();
