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
}

})();
