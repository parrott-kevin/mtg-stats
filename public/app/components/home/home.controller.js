/**
 *
 * Created by parrott-kevin on 1/8/15.
 */
(function() {
  'use strict';

  angular
    .module('home.controller', ['ui.bootstrap'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['fetchCard', '_', '$filter'];

  function HomeController(fetchCard, _, $filter) {
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
          vm.cardAttributes = [
            ['Mana Cost', vm.cardInfo.ManaCost],
            ['CMC', vm.cardInfo.CMC],
            ['Type', vm.cardInfo.Type],
            ['Power', vm.cardInfo.Power],
            ['Toughness', vm.cardInfo.Toughness],
            ['Loyalty', vm.cardInfo.Loyalty],
            ['Text', vm.cardInfo.Text],
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
            ['Release Date', $filter('date')(vm.cardInfo.Set.ReleaseDate, 'longDate')]
            //['SetType', 'Set Type']
          ];
        });
      }
    };

  }

})();
