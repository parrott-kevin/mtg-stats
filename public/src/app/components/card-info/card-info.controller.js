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
    '_',
    '$routeParams',
    '$location',
    'cardNameIdSet',
    'setNameId'
  ];

  function CardInfoController (fetchCard, displayCard, cardImage, deckStorage, _, $routeParams, $location, cardNameIdSet, setNameId) {
    var vm = this;
    var id = $routeParams.id;

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
      var otherCardId = (_.find(setNameId, {Name: printing})).id;
      fetchCard.getCardInfoBySet(vm.cardInfo.Name, otherCardId).then(function(d) {
        $location.path('/cardInfo/' + angular.fromJson(d).data.id);
      });
    };

    vm.addDeck = function(card) {
      deckStorage.add(card);
    };
  }
})();
