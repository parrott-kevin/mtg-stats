(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'home.controller',
      'card-info.controller',
      'search.controller',
      'deck.controller',
      'fetch-card.factory',
      'fetch-set.factory',
      'display-card.factory',
      'card-image.factory',
      'lodash.factory',
      'deck-storage.factory'
    ]);
})();
