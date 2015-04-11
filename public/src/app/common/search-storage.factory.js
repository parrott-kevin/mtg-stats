(function () {
  'use strict';

  angular
    .module('search-storage.factory', [])
    .factory('searchStorage', searchStorage);

  searchStorage.$inject = [];

  function searchStorage() {

    var cardNameIdSet = {};
    var setNameId = {};

    return {
      getCardNameIdSet: getCardNameIdSet,
      setCardNameIdSet: setCardNameIdSet,
      getSetNameId: getSetNameId,
      setSetNameId: setSetNameId
    };

    function getCardNameIdSet() {
      return cardNameIdSet;
    }
    function setCardNameIdSet(obj) {
      cardNameIdSet = obj;
    }

    function getSetNameId() {
      return setNameId;
    }
    function setSetNameId(obj) {
      setNameId = obj;
    }
  }

})();
