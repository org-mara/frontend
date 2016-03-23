'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ActaCtrl
 * @description
 * # ActaCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ActaCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {


    // **************** SIDENAV **************** //
      $scope.sidenavflag = true;

      $scope.closeRight = function () {
        $scope.sidenavflag = false;
        $mdSidenav('right').close();
      };

      $scope.openRight = function(){
       $scope.sidenavflag = true;
      };


  }]);
