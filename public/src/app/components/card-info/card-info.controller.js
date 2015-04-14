(function() {
  'use strict';

  angular
    .module('card-info.controller', ['ui.bootstrap'])
    .controller('CardInfoController', CardInfoController);

  CardInfoController.$inject = [
    'fetchCard',
    'displayCard',
    'cardImage',
    'deckStorage',
    'searchStorage',
    '_',
    '$routeParams',
    '$location'
  ];

  function CardInfoController (fetchCard, displayCard, cardImage, deckStorage, searchStorage, _, $routeParams, $location) {
    var vm = this;
    var id = $routeParams.id;
    var cardNameIdSet = searchStorage.getCardNameIdSet();

    fetchCard.getCardInfo(id).then(function(d) {
      vm.cardInfo = angular.fromJson(d.data);
      if (vm.cardInfo.MultiverseId) {
        vm.imgsrc = cardImage.link(vm.cardInfo.MultiverseId);
      } else {
        vm.imgsrc = cardImage.link(_.find(cardNameIdSet, {Name: vm.cardInfo.Name}).MultiverseId);
      }
      vm.cardAttributes = displayCard.display(vm.cardInfo).cardAttributes;
    });


    vm.otherPrinting = function(printing) {
      var otherCardId = (_.find(vm.setNameIdObj, {Name: printing})).id;
      fetchCard.getCardInfoBySet(vm.cardInfo.Name, otherCardId).then(function(d) {
        $location.path('/cardInfo/' + angular.fromJson(d).data.id);
      });
    };

    vm.addDeck = function(card) {
      deckStorage.add(card);
    };
  }
})();
