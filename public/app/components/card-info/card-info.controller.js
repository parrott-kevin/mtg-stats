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
    'symbol',
    '_',
    '$routeParams',
    '$filter',
    '$location'
  ];

  function CardInfoController (fetchCard, symbol, _, $routeParams, $filter, $location) {
    var vm = this;
    var id = $routeParams.id;

    fetchCard.getCardInfo(id).then(function(d) {
      displayCard(angular.fromJson(d.data));
    });

    vm.setNameIdObj = angular.fromJson(sessionStorage.setNameIdObj);

    vm.otherPrinting = function(printing) {
      fetchCard.getCardInfoBySet(vm.cardInfo.Name, (_.find(vm.setNameIdObj, {Name: printing})).id).then(function(d) {
        $location.path('/cardInfo/' + angular.fromJson(d).data.id);
      });
    };

    function displayCard(card) {
      vm.cardInfo = card;
      var printings = vm.cardInfo.Printings.split(',');

      //vm.cardInfo.ManaCost = symbol.convert(vm.cardInfo.ManaCost);

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
        ['Printings', printings],
        ['Source', vm.cardInfo.Source]
      ];

      if (!_.isNull(vm.cardInfo.MultiverseId)) {
        vm.imgsrc = 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + vm.cardInfo.MultiverseId + '&type=card';
      }

    }
  }
})();
