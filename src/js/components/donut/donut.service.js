(function() {

  'use strict';
  const server = [ 'https://api-language-roundup-java.herokuapp.com/donuts',
  'https://api-language-roundup-java.herokuapp.com/donuts'
  ];
  angular
    .module('myApp.components.donut', [])
    .service('donut', Donut);
    Donut.$inject = ['$http'];

  function Donut($http) {
    /*jshint validthis: true */
    const vm = this;
    vm.id = null;
    vm.name = null;
    vm.topping = null;
    vm.price = null;
    vm.post = true;

    vm.resetForm = function() {
      vm.id = null;
      vm.name = null;
      vm.topping = null;
      vm.price = null;
      vm.post = true;
    };

    vm.setForm = function(id, name, topping, price) {
      vm.id = id;
      vm.name = name;
      vm.topping = topping;
      vm.price = price;
      vm.post = false;
    };
}

})();
