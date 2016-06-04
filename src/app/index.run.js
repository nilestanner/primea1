(function() {
  'use strict';

  angular
    .module('primea1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
