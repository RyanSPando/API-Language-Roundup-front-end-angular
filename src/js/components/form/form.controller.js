(function() {

  'use strict';

  angular
    .module('myApp.components.form', [])
    .controller('formController', formController);

  formController.$inject = ['$scope', '$location', 'ajax'];
  function formController($scope, $location, ajax) {
    /*jshint validthis: true */
    const vm = this;
    vm.id = null;
    vm.name = null;
    vm.topping = null;
    vm.price = null;
  }

})();
