'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', ['$scope', '$mdDialog', '$mdSidenav', function ($scope, $mdDialog, $mdSidenav) {


// **************** SIDENAV **************** //
    $scope.close = function () {
      $mdSidenav('left').close();
    };

    $scope.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    };


// **************** DIALOG **************** //
    var dialogController = function($scope, $mdDialog){
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    };

    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: dialogController,
          templateUrl: '/views/newtod.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      };


      $scope.documents = {
        "tod": [
          {
            "name" : "Acta"
          },
          {
            "name" : "Dictamen"
          },
          {
            "name" : "Resolución"
          },
          {
            "name" : "Ordenanza"
          },
          {
            "name" : "Nota"
          },
          {
            "name" : "Providencia"
          }
        ]
      };

  }])

// Mugre para que funcione el menu
        .directive('onFinishRender', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {

                          // Enables expand functionality in subtrees.
                              var activateLists = function() {
                                // alert("ALE");
                                return $('.minimized li a').on('click', function() {
                                  var children, obj, toggle;
                                  obj = $(this);
                                  if (obj.attr('href') === '#') {
                                    children = obj.parent().children('ul');
                                    toggle = obj.find('.toggle');
                                    if (children.hasClass('opened')) {
                                      children.removeClass('opened');
                                      toggle.removeClass(toggle.attr('data-altclass'));
                                      toggle.addClass(toggle.attr('data-class'));
                                      children.slideUp('fast');
                                    } else {
                                      children.addClass('opened');
                                      toggle.removeClass(toggle.attr('data-class'));
                                      toggle.addClass(toggle.attr('data-altclass'));
                                      children.slideDown('fast');
                                    }
                                    return false;
                                  }
                                })
                              };
                          activateLists();

                        });
                    }
                }
            }
            });

  // **************** PAISES TEST DE MENU  **************** //
// .factory('dataFactory', ['$http',function($http){
//
//         var urlGeoObjectWS= 'https://geo-object-ws.unc.edu.ar/';
//          var dataFactory = {};
//
//         dataFactory.getContinents=function(){
//          return $http.get(urlGeoObjectWS + 'continents');
//        };
//
//        dataFactory.getCountries=function(callback){
//          var result = $http.get(urlGeoObjectWS + 'countries');
//          if(callback) {
//            result.then(function(response){
//              callback(response.data);
//            });
//          } else {
//            return result;
//          }
//        };
//
//        dataFactory.getCountriesFromContinent=function(continentCode){
//          return $http.get(urlGeoObjectWS + 'continents/' + continentCode + '/countries');
//        };
//
//        dataFactory.getCountry=function(searchFilters){
//            searchFilters=searchFilters||{}; //Null parameter case
//            return $http.get(urlGeoObjectWS + 'countries');
//        };
//
//        dataFactory.getProvincesFromCountry=function(callback, countryCode){
//          return $http.get(urlGeoObjectWS + 'countries/' + countryCode + '/provinces')
//            .success(function(data){
//              callback(data);
//            })
//            .error(function(error){
//              callback([]);
//            });
//        };
//
//        dataFactory.getProvinceByCode = function(callback, provinceCode){
//          return $http.get(urlGeoObjectWS + 'provinces/' + provinceCode)
//            .success(function (province) {
//              callback(province['org.geoobject.model.Province']);
//            })
//            .error(function (error) {
//              console.error(error);
//            });
//        };
//
//        return dataFactory;
//   }]);
