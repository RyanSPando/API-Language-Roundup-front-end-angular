// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'ngAnimate',
      'ui.materialize',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.ajax'
    ]);

})();
