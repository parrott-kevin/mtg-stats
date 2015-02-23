/**
 *
 * Created by parrott-kevin on 1/8/15.
 */
(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', 'fetchSet', '_', '$filter'];

  function HomeController(fetchCard, fetchSet, _, $filter) {
    var vm = this;
    vm.card = null;
    vm.cardAttributes = null;

    if (_.isUndefined(vm.cardNameIdSetObj)) {
      fetchCard.getCardNameIdSet().then(function(d) {
        vm.cardNameIdSetObj = angular.fromJson(d.data);
      });
    }

    if (_.isUndefined(vm.setNameIdObj)) {
      fetchSet.getSetNameId().then(function(d) {
        vm.setNameIdObj = angular.fromJson(d.data);
      });
    }

    vm.imgsrc = 'http://mtgimage.com/card/cardback.jpg';

    vm.submit = function() {
      if (_.isObject(vm.card)) {
        vm.onSelect();
      } else {
        vm.onPartial();
      }
    };
    vm.onSelect = function() {
      fetchCard.getCardInfo(vm.card.id).then(function(d) {
        displayCard(d);
      });
    };
    vm.onPartial = function() {
      fetchCard.getCardPartial(vm.card).then(function(d) {
        vm.cardPartial = angular.fromJson(d.data);
        console.log(vm.cardPartial);
      });
    };

    vm.otherPrinting = function(printing) {
      fetchCard.getCardInfoBySet(vm.cardInfo.Name, (_.find(vm.setNameIdObj, {Name: printing})).id).then(function(d) {
        displayCard(d);
      });
    };

    function displayCard(card) {
      vm.cardInfo = angular.fromJson(card.data);
      vm.cardAttributes = [
        ['Mana Cost', vm.cardInfo.ManaCost],
        ['CMC', vm.cardInfo.CMC],
        ['Type', vm.cardInfo.Type],
        //['Original Type', vm.cardInfo.OriginalType],
        ['Power', vm.cardInfo.Power],
        ['Toughness', vm.cardInfo.Toughness],
        ['Loyalty', vm.cardInfo.Loyalty],
        ['Text', vm.cardInfo.Text],
        //['Original Text', vm.cardInfo.OriginalText],
        ['Flavor', vm.cardInfo.Flavor],
        ['Artist', vm.cardInfo.Artist],
        ['Rarity', vm.cardInfo.Rarity],
        ['Card Number', vm.cardInfo.Number],
        //['Border'],
        //['Layout'],
        ['Multiverse ID', vm.cardInfo.MultiverseId],
        ['Reserved', vm.cardInfo.Reserved],
        ['Timeshifted', vm.cardInfo.Timeshifted],
        ['Watermark', vm.cardInfo.Watermark],
        ['Block', vm.cardInfo.Set.Block],
        //['Border'],
        ['Set Code', vm.cardInfo.Set.Code],
        ['Gatherer Code', vm.cardInfo.Set.GathererCode],
        ['Set Name', vm.cardInfo.Set.Name],
        ['Old Code', vm.cardInfo.Set.OldCode],
        ['Online Only', vm.cardInfo.Set.OnlineOnly],
        ['Release Date', $filter('date')(vm.cardInfo.Set.ReleaseDate, 'longDate')],
        //['SetType', 'Set Type']
        ['Printings', vm.cardInfo.Printings.split(',').filter(function(n) {return n !== vm.cardInfo.Set.Name;})],
        ['Source', vm.cardInfo.Source]
      ];

      var mtgImage = 'http://mtgimage.com/';
      if (_.isNull(vm.cardInfo.MultiverseId)) {
        vm.imgsrc = mtgImage + 'set/' + vm.cardInfo.Set.Code + '/' + vm.cardInfo.Name + '.jpg';
      } else {
        vm.imgsrc = mtgImage + 'multiverseid/' + vm.cardInfo.MultiverseId + '.jpg';
      }
    }
  }

})();
