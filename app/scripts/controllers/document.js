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

      // Quita la aplicacion de estilos de un documento que ha sido deselecionqdo
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
        alert("abrir pdf");
      }


      // ********************************  Borrador hasta tener web services ******************************** //
       var backendDocument = {
        "id":"3600c7c7-04a6-4836-8f2c-6679ddf41968",
        "objImplements": ["ccb0d548-ba8e-46fd-81a7-22f4f957fb19"],
        "objName":"EDOG-UNC:111/2016",
        "objTitle":"Documento General EDOG-UNC:111/2016",
        "objDescription":"Documento General",
        "objTags": ["Documento General","EDOG-UNC:111/2016"],
        "createDate":"2016-04-05T11:13:38-03:00",
        "userCreate":{
          "id":"10a04547-293e-4a01-8f9b-5497530b6b47",
          "name":"dmansilla@unc.edu.ar",
          "person":{
            "id":"41d97216-efa0-44cc-aa10-f56b402daf92",
            "names": ["Diego","Pablo"],
            "lastNames": ["Mansilla","Cendra"],
            "identities": [{
              "id":"a76efc8a-af7b-400f-ae7a-43e6f3bf028f",
              "code":"ARG_DNI",
              "shortName":"DNI",
              "name":"Documento Nacional de Identidad",
              "number":"27656133"
            }]
          }
        },
        "adminUnitCreate":{
          "id":"9377334a-a6f3-4442-9086-59430c592c90",
          "code":"76",
          "shortName":"PSI",
          "name":"Prosecretaría de Informática"
        },
        "subject":"Constancia AFIP - Ing. Diego Mansilla",
        "pdfToEmbed":{
          "id":"98285ee3-3fd2-4276-828e-4c309f6e576f",
          "name":"CONSTANCIA AFIP.pdf",
          "url":"https://mara.unc.edu.ar/open?id=98285ee3-3fd2-4276-828e-4c309f6e576f"
        }
      };

    $scope.properties = function () {
        var myJson = null;
        backendDocument

      }

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
