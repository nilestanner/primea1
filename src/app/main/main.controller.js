(function() {
  'use strict';

  angular
    .module('primea1')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1465072547193;

    vm.numbers = [];
    vm.totalNumbers = 100;

    vm.setUpTable = function(){
      vm.totalNumbers = parseInt(vm.totalNumbers);
      vm.numbers = [];
      var total = vm.totalNumbers
      var i = total
      while( i--){
        vm.numbers[i] = {
          num:total,
          numClass:'not-processed'
        }
        total--
      }
    }
    vm.setUpTable();

    vm.calculatePrimes = function (){
      vm.setUpTable();
      vm.startTime = new Date();
      var i = 1
      var curPrime;
      vm.numbers[0].numClass='prime';
      while(i < vm.totalNumbers){
        curPrime = vm.numbers[i];
        curPrime.numClass='prime';
        for(var j = i + curPrime.num; j < vm.totalNumbers; j += curPrime.num){
          if(vm.numbers[j] != null){
            vm.numbers[j].numClass = 'not-prime';
          }
        }
        i = findNextPrimeIndex(i);
      }
      vm.endTime = new Date();
    }

    function findNextPrimeIndex(i){
      while(vm.numbers[i] !== null && vm.numbers[i].numClass !== 'not-processed'){
        i++;
      }
      return i;
    }

  }
})();
