(function() {

  'use strict';
  const server = [ 'https://api-language-roundup-java.herokuapp.com/donuts',
  'https://api-language-roundup-java.herokuapp.com/donuts'
  ];
  angular
    .module('myApp.components.ajax', [])
    .service('ajax', Ajax);
    Ajax.$inject = ['$http'];

  function Ajax($http) {
    /*jshint validthis: true */
    const vm = this;
    //get all products
    vm.getDonuts = (i) => $http.get(`${server[i]}`);
    //get one product
    vm.getDonut = (i, itemIndex) => $http.get(`${server[i]}/${itemIndex}`);
}

})();
