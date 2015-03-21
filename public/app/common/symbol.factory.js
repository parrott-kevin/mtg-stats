/**
 * Created by parrott-kevin on 3/9/15.
 */

(function() {
  'use strict';
  angular
    .module('symbol.factory', [])
    .factory('symbol', symbol);

  symbol.$inject = ['_'];

  function symbol(_) {
// Refactor to use local svg
    //return {
    //  convert: function(manaCost) {
    //    return _.map(_.words(manaCost, /[^{}]+/g), function(n) {
    //      n = n.replace(/\//g, '').toLowerCase();
    //      return 'http://mtgjson.com/images/' + n + '.png';
    //    });
    //  }
    //};
  }
})();
