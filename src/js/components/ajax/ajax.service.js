(function() {

  'use strict';
  const server = [ 'https://api-language-roundup-java.herokuapp.com/donuts',
  'https://api-language-roundup-python.herokuapp.com/donuts'
  ];
  angular
    .module('myApp.components.ajax', [])
    .service('ajax', Ajax)
    .config(function ($httpProvider) {
      $httpProvider.defaults.headers.common = {};
      $httpProvider.defaults.headers.post = {};
      $httpProvider.defaults.headers.put = {};
      $httpProvider.defaults.headers.patch = {};
    });

    Ajax.$inject = ['$http'];

  function Ajax($http) {
    /*jshint validthis: true */
    const vm = this;
    vm.index = 1;
    //get all donuts
    vm.getDonuts = () => $http.get(`${server[vm.index]}`);
    //get one donut
    vm.getDonut = (itemIndex) => $http.get(`${server[vm.index]}/${itemIndex}`);
    //edit donut
    vm.editDonut = function(donut) {
      return $http({
        method: 'PUT',
        url: `${server[vm.index]}/${donut.id}?${$.param(donut)}`,
      });
    };

    vm.createDonut = function(donut) {
      return $http({
        method: 'POST',
        url: `${server[vm.index]}?${$.param(donut)}`,
      });
    };

    vm.deleteDonut = function(id) {
      console.log('Ajax Delete Donut');
      return $http({
        method: 'DELETE',
        url: `${server[vm.index]}/${id}`,
      });
    };
    //set server
    vm.setIndex = function(index) {
      vm.index = index;
    } ;
}

})();
