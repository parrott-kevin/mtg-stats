(function() {
  'use strict';

  angular
    .module('card-image.factory', [])
    .factory('cardImage', cardImage);

  cardImage.$inject = ['_'];

  function cardImage(_) {

    return {
      link: link
    };

    function link(multiverseId) {
      if (!_.isNull(multiverseId)) {
        return 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + multiverseId + '&type=card';
      }
    }
  }

})();
