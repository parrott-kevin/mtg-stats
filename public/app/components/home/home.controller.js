/**
 *
 * Created by parrott-kevin on 1/8/15.
 */
(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', '_'];

  function HomeController(fetchCard, _) {
    var vm = this;
    vm.card = null;
    vm.cardAttributes = null;
    vm.setAttributes = null;

    if (_.isUndefined(vm.cardNameIdSetObj)) {
      fetchCard.getCardNameIdSet().then(function(d) {
        vm.cardNameIdSetObj = angular.fromJson(d.data);
      });
    }

    vm.imgsrc = 'http://mtgimage.com/card/cardback.jpg';

    vm.onSelect = function() {
      if (vm.card) {
        var mtgImage = 'http://mtgimage.com/';
        if (_.isEmpty(vm.card.MultiverseId)) {
          vm.imgsrc = mtgImage + 'card/' + vm.card.Name + '.jpg';
        } else {
          vm.imgsrc = mtgImage + 'multiverseid/' + vm.card.MultiverseId + '.jpg';
        }
        fetchCard.getCardInfo(vm.card.id).then(function(d) {
          vm.cardInfo = angular.fromJson(d.data);
          vm.setInfo = vm.cardInfo.SetInfo;
        });
        vm.cardAttributes = [
          ['ManaCost', 'Mana Cost'],
          ['CMC'],
          ['Type'],
          ['Artist'],
          ['Border'],
          ['Flavor'],
          ['Layout'],
          ['Loyalty'],
          ['MultiverseId', 'Multiverse ID'],
          ['Number', 'Card Number'],
          ['Power'],
          ['Rarity'],
          ['Reserved'],
          ['Text'],
          ['Timeshifted'],
          ['Toughness'],
          ['Watermark']
        ];
        vm.setAttributes = [
          ['Block'],
          ['Border'],
          ['Code', 'Set Code'],
          ['GathererCode', 'Gatherer Code'],
          ['Name', 'Set Name'],
          ['OldCode', 'Old Code'],
          ['OnlineOnly', 'Online Only'],
          ['ReleaseDate', 'Release Date'],
          ['SetType', 'Set Type']
        ];
      }
    };

  }

})();
