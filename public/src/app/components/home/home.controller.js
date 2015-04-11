(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', 'fetchSet', 'searchStorage', '_', '$location'];

  function HomeController(fetchCard, fetchSet, searchStorage, _, $location) {
    var vm = this;
    vm.card = null;

    if (_.isEmpty(searchStorage.getCardNameIdSet())) {
      fetchCard.getCardNameIdSet().then(function(d) {
        searchStorage.setCardNameIdSet(angular.fromJson(d.data));
        vm.cardNameIdSetObj = searchStorage.getCardNameIdSet();
      });
    } else {
      vm.cardNameIdSetObj = searchStorage.getCardNameIdSet();
    }

    if (_.isEmpty(searchStorage.getSetNameId())) {
      fetchSet.getSetNameId().then(function(d) {
        searchStorage.setSetNameId(angular.fromJson(d.data));
        vm.setNameIdObj = searchStorage.getSetNameId();
      });
    } else {
      vm.setNameIdObj = searchStorage.getSetNameId();
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
      $location.path('/search/' + vm.card);
    };

  }

})();
