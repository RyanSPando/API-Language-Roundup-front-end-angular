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
    vm.post = donut.post;

    this.cancel = () => {
      donut.resetForm();
      $scope.formie.$setPristine();
      $location.path('/');
    };

    this.submit = () => {
      const newDonut = {
        id: vm.id,
        name: vm.name,
        topping: vm.topping,
        price: vm.price
      };

      ajax.editDonut(newDonut).then(editedDonut => {
        donut.resetForm();
        $scope.formie.$setPristine();
        $location.path('/');
      });
    };

    this.submitNew = () => {
      const newDonut = {
        name: vm.name,
        topping: vm.topping,
        price: vm.price
      };

      ajax.createDonut(newDonut).then(createDonut => {
        donut.resetForm();
        $scope.formie.$setPristine();
        $location.path('/');
      });
    };
  }

})();
