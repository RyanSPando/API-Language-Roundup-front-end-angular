(function() {

  'use strict';

  angular
    .module('myApp.components.form', [])
    .controller('formController', formController);

  formController.$inject = ['$scope', '$location', 'ajax', 'donut'];
  function formController($scope, $location, ajax, donut) {
    /*jshint validthis: true */
    const vm = this;
    vm.id = donut.id;
    vm.name = donut.name;
    vm.topping = donut.topping;
    vm.price = donut.price;

    this.submit = () => {
      const newDonut = {
        id: vm.id,
        name: vm.name,
        topping: vm.topping,
        price: vm.price
      };

      ajax.editDonut(newDonut);
      donut.resetForm();
      $scope.formie.$setPristine();
      $location.path('/');
    };
  }

})();
