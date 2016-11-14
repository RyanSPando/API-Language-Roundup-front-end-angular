(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'ajax', 'donut', '$location'];

  function mainController($scope, ajax, donut, $location) {
    /*jshint validthis: true */
    const vm = this;
    vm.serverID = 0;
    vm.donuts = [];

    ajax.getDonuts(vm.serverID).then(donuts => {
      vm.donuts = donuts.data;
    });

    vm.getList = function() {
      ajax.getDonuts(vm.serverID).then(donuts => {
        vm.donuts = donuts.data;
      });
    };

    vm.editDonut = function(id, name, topping, price) {
      donut.setForm(id, name, topping, price);
      $location.path('/edit');
    };

    vm.deleteDonut = function(id) {
      console.log('MainController Delete');
      ajax.deleteDonut(id).then(value => vm.getList());
    };

    vm.createDonut = function() {
      $location.path('/new');
    };

    vm.updateServer = function() {
      ajax.setIndex(vm.serverID);
    };
  }

})();
