/**
 * Created by parrott-kevin on 3/4/15.
 */

(function() {
  'use strict';

  angular
    .module('card-info.controller', ['ui.bootstrap'])
    .controller('CardInfoController', CardInfoController);

  CardInfoController.$inject = [
    'fetchCard',
    'displayCard',
    '_',
    '$routeParams',
    '$filter',
    '$location'
  ];

  function CardInfoController (fetchCard, displayCard, _, $routeParams, $location) {
    var vm = this;
    var id = $routeParams.id;

    fetchCard.getCardInfo(id).then(function(d) {
      vm.cardInfo = angular.fromJson(d.data);
      var display = displayCard.display(vm.cardInfo);
      vm.cardAttributes = display.cardAttributes;
      vm.imgsrc = display.imgsrc;
    });

    vm.setNameIdObj = angular.fromJson(sessionStorage.setNameIdObj);

    vm.otherPrinting = function(printing) {
      fetchCard.getCardInfoBySet(vm.cardInfo.Name, (_.find(vm.setNameIdObj, {Name: printing})).id).then(function(d) {
        $location.path('/cardInfo/' + angular.fromJson(d).data.id);
      });
    };
  }
})();
