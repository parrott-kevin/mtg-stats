/**
 *
 * Created by parrott-kevin on 1/8/15.
 */
(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', '_', '$scope', 'a'];

  function HomeController(fetchCard, _, a) {
    var vm = this;

    if (_.isUndefined(vm.cardNameIdSetObj)) {
      fetchCard.getCardNameIdSet().then(function(d) {
        vm.cardNameIdSetObj = angular.fromJson(d.data);
      });
    }

    vm.submit = function() {
      if (vm.card) {
        var mtgImage = 'http://mtgimage.com/';
        if (_.isEmpty(vm.card.MultiverseId)) {
          vm.imgsrc = mtgImage + 'card/' + vm.card.Name + '.jpg';
        } else {
          vm.imgsrc = mtgImage + 'multiverseid/' + vm.card.MultiverseId + '.jpg';
        }
        fetchCard.getCardInfo(vm.card.id).then(function(d) {
          vm.cardInfo = angular.fromJson(d.data);
        });
      }
    };

  }

})();
