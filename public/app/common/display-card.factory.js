/**
 * Created by parrott-kevin on 3/26/15.
 */
(function() {
  'use strict';

  angular
    .module('display-card.factory', [])
    .factory('displayCard', displayCard);

  displayCard.$inject = ['_', '$filter'];

  function displayCard(_, $filter) {

    return {
      display: function(card) {
        var printings = card.Printings.split(',');

        var cardAttributes = [
          ['Mana Cost', card.ManaCost],
          ['CMC', card.CMC],
          ['Type', card.Type],
          //['Original Type', card.OriginalType],
          ['Power', card.Power],
          ['Toughness', card.Toughness],
          ['Loyalty', card.Loyalty],
          ['Text', card.Text],
          //['Original Text', card.OriginalText],
          ['Flavor', card.Flavor],
          ['Artist', card.Artist],
          ['Rarity', card.Rarity],
          ['Card Number', card.Number],
          //['Border'],
          //['Layout'],
          ['Multiverse ID', card.MultiverseId],
          ['Reserved', card.Reserved],
          ['Timeshifted', card.Timeshifted],
          ['Watermark', card.Watermark],
          ['Block', card.Set.Block],
          //['Border'],
          ['Set Code', card.Set.Code],
          ['Gatherer Code', card.Set.GathererCode],
          ['Set Name', card.Set.Name],
          ['Old Code', card.Set.OldCode],
          ['Online Only', card.Set.OnlineOnly],
          ['Release Date', $filter('date')(card.Set.ReleaseDate, 'longDate')],
          //['SetType', 'Set Type']
          ['Printings', printings],
          ['Source', card.Source]
        ];

        return {
          cardAttributes: cardAttributes
        };

      }
    };

  }
})();
