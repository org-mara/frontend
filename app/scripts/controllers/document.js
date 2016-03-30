'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DocumentCtrl
 * @description
 * # DocumentCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DocumentCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {


    // ******************************** SIDENAV ******************************** //
      $scope.sidenavflag = true;

      $scope.closeRight = function () {
        $scope.sidenavflag = false;
        $mdSidenav('right').close();
      };

      $scope.openRight = function(){
       $scope.sidenavflag = true;
      };


      // ********************************  ******************************** //

  }]);
