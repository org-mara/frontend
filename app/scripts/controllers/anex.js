'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AnexCtrl
 * @description
 * # AnexCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('AnexCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {


  // **************** SIDENAV **************** //
    $scope.close = function () {
      $mdSidenav('right').close();
    };

    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    $scope.toggleRight = function () {
      $mdSidenav('right').toggle();
    };

  }]);