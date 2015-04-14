(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', '_', '$location'];

  function HomeController(fetchCard, _, $location) {
    var vm = this;
    vm.card = undefined;

    fetchCard.getCardNameIdSet().then(function(d) {
      vm.cardNameIdSetObj = angular.fromJson(d.data);
    });

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
