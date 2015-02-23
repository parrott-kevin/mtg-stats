/**
 * Created by parrott-kevin on 1/6/15.
 */
(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'home.controller',
      'fetch-card.factory',
      'fetch-set.factory'
    ])
    .constant('_', window._)
    .run(function($rootScope) {
      $rootScope._ = window._;
    });
})();
