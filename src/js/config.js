(function() {

  'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/js/components/main/view.home.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      }).
      when('/edit', {
        templateUrl: '/js/components/form/view.form.html',
        controller: 'formController',
        controllerAs: 'formCtrl'
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }

})();
