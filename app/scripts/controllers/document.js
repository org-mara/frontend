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
      $scope.sidenavflag = true;         //bandera para abrir el sidenav derecho al hacer click sobre el documento
      $scope.indexSelectedDoc = null;    //indice del documento seleccionado, permite la aplicacion de estilos
      $scope.selectedDoc = null;         //documento seleccionado

      // cierra el sidenav derecho de detalles del documento
      $scope.closeRight = function () {
        $scope.sidenavflag = false;
        $mdSidenav('right').close();
      };

      // abre el sidenav derecho de detalles del documento y aplica estilos de selecion al documento
      $scope.openRight = function($event, $index){
        $scope.sidenavflag = true;
        $scope.indexSelectedDoc = $index;
        $scope.selectedDoc = $scope.documents.docs[$index];

        $event.stopPropagation();
      };

      // Quita la aplicacion de estilos de un documento que hq sido deselecionqdo
      $scope.deselectedDoc = function () {
        $scope.indexSelectedDoc = null;
        $scope.selectedDoc = null;
      }

      // Se fija si el documento selecionado es igual al indice para la aplicacion de estilos
      $scope.isSelected = function ($index) {
        return ($scope.indexSelectedDoc == $index);
      }


      // ******************************** VISUALIZAR PDF ******************************** //
      $scope.showPDF = function () {
        console.log("abrir pdf");
      }


      // ********************************  Borrador hasta tener web services ******************************** //
      $scope.documents = {
        "docs": [
          {
            "type" : "Nota",
            "name" : "Nota-UNC:123/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png",
            "properties": {
                "Tipo" : "Nota",
                "Propietario" : "Romina Racca",
                "Modificado" : "Esteban Agüero",
                "Creación" : "Romina Racca"
              }
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:456/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:789/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:1596/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:876/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:6546/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:3876/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:68645/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:46/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:6456/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:97/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:6487/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:678/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          },
          {
            "type" : "Nota",
            "name" : "Nota-UNC:8796/2016",
            "icon" : "images/nota.svg",
            "preview" : "images/EDOG_UNC.png"
          }
        ]};


      // ********************************  ******************************** //

  }]);
