(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'ajax', ];

  function mainController($scope, ajax) {
    /*jshint validthis: true */
    const vm = this;
    vm.serverID = 0;
    vm.donuts = [];

    ajax.getDonuts(vm.serverID).then(donuts => {
      vm.donuts = donuts.data;
    });

    vm.editDonut = function(id, name, topping, price) {
      
    };
  }

})();
