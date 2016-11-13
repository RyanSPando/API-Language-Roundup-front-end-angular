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
      const user = {
        name: this.username,
        password: this.password,
        email: this.email,
        zip: this.zip
      };
      this.users.push(user);
      this.username = null;
      this.email = null;
      this.password = null;
      this.zip = null;
      $scope.formie.$setPristine();
    };
  }

})();
