/**
 * Created by parrott-kevin on 3/28/15.
 */

(function() {
  'use strict';

  angular
    .module('card-image.factory', [])
    .factory('cardImage', cardImage);

  cardImage.$inject = ['_'];

  function cardImage(_) {
    return {
      link: function(multiverseId) {
        if (!_.isNull(multiverseId)) {
          return 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + multiverseId + '&type=card';
        }
      }
    };
  }

})();
