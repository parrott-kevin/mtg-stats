/**
 * Created by parrott-kevin on 4/2/15.
 */

(function() {
  'use strict';

  angular
    .module('lodash.factory', [])
    .factory('_', lodash);

  lodash.$inject = ['$window'];

  function lodash($window) {
    return $window._;
  }

})();
