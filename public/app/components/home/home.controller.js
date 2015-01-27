/**
 *
 * Created by parrott-kevin on 1/8/15.
 */
(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', '_', '$scope'];

  function HomeController(fetchCard, _) {
    var vm = this;

    if (_.isUndefined(vm.cardNameIdObj)) {
      fetchCard.getCardNameId().then(function(d) {
        vm.cardNameIdObj = angular.fromJson(d.data);
      });
    }

    vm.submit = function() {
      if (vm.card) {
        var mtgImage = 'http://mtgimage.com/multiverseid/';
        vm.imgsrc = mtgImage + vm.card.multiverseId + '.jpg';
        fetchCard.getCardInfo(vm.card.name).then(function(d) {
          vm.cardInfo = angular.fromJson(d.data);
        });
      }
    };

  }

})();
