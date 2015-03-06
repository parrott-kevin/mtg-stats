/**
 *
 * Created by parrott-kevin on 1/8/15.
 */
(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', 'fetchSet', '_', '$location'];

  function HomeController(fetchCard, fetchSet, _, $location) {
    var vm = this;
    vm.card = null;

    if (_.isUndefined(vm.cardNameIdSetObj)) {
      fetchCard.getCardNameIdSet().then(function(d) {
        sessionStorage.cardNameIdSetObj = angular.toJson(d.data);
        vm.cardNameIdSetObj = angular.fromJson(sessionStorage.cardNameIdSetObj);

        //vm.cardNameIdSetObj = angular.fromJson(d.data);
      });
    }

    if (_.isUndefined(vm.setNameIdObj)) {
      fetchSet.getSetNameId().then(function(d) {
        sessionStorage.setNameIdObj = angular.toJson(d.data);
        vm.setNameIdObj = angular.fromJson(sessionStorage.setNameIdObj);
        //vm.setNameIdObj = angular.fromJson(d.data);
      });
    }

    vm.submit = function() {
      if (_.isObject(vm.card)) {
        vm.onSelect();
      } else {
        vm.onPartial();
      }
    };

    vm.onSelect = function() {
      $location.path('/cardInfo/' + vm.card.id);
    };

    vm.onPartial = function() {
      fetchCard.getCardPartial(vm.card).then(function(d) {
        vm.cardPartial = angular.fromJson(d.data);
        console.log(vm.cardPartial);
      });
    };

  }

})();
