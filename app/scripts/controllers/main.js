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


      $scope.todSelected = null;              //seleccion en el DIALOG de TOD para instanciar un nuevo Doumento
      $scope.documentMenuSelected = null;     //seleccion de TOD en el MENU dentro de la lista de Documentos


  // ******************************** SIDENAV ******************************** //
    $scope.close = function () {
      $mdSidenav('left').close();
    };

    $scope.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    };


  // ******************************** CONTROLADOR del DIALOG de boton NUEVO ******************************** //
    var dialogController = function($scope, $mdDialog){

      $scope.indice = null;

      // boton CANCELAR
      $scope.cancel = function() {
        $mdDialog.cancel();
        $scope.indice = null;
      };

      // Seleccion de un TOD
      $scope.selected = function (index) {
          $scope.indice = index;
      };

      // boton CREAR
      $scope.createDoc = function() {
        $mdDialog.hide($scope.tods.unc[$scope.indice])
      };

      // ********************************  Borrador hasta tener web services ******************************** //
      $scope.tods = {
        "unc": [
          {
            "name" : "Acta",
            "icon" : "images/acta.svg",
            "idnetifier" : "ACTA"
          },
          {
            "name" : "Anexo",
            "icon" : "images/anex.svg",
            "idnetifier" : "ANEX"
          },
          {
            "name" : "Cédula de notificación",
            "icon" : "images/cedu.svg",
            "idnetifier" : "CEDU"
          },
          {
            "name" : "Comunicación",
            "icon" : "images/comu.svg",
            "idnetifier" : "COMU"
          },
          {
            "name" : "Conclusión sumarial",
            "icon" : "images/concl.svg",
            "idnetifier" : "CONCL"
          },
          {
            "name" : "Dictamen",
            "icon" : "images/dict.svg",
            "idnetifier" : "DICT"
          },
          {
            "name" : "Disposición",
            "icon" : "images/disp.svg",
            "idnetifier" : "DISP"
          },
          {
            "name" : "Expediente",
            "icon" : "images/exp.svg",
            "idnetifier" : "EXP"
          },
          {
            "name" : "Informe",
            "icon" : "images/info.svg",
            "idnetifier" : "INFO"
          },
          {
            "name" : "Memorando",
            "icon" : "images/memo.svg",
            "idnetifier" : "MEMO"
          },
          {
            "name" : "Nota",
            "icon" : "images/nota.svg",
            "idnetifier" : "NOTA"
          },
          {
            "name" : "Oficio",
            "icon" : "images/ofic.svg",
            "idnetifier" : "OFIC"
          },
          {
            "name" : "Ordenanza",
            "icon" : "images/orde.svg",
            "idnetifier" : "ORDE"
          },
          {
            "name" : "Providencia",
            "icon" : "images/prov.svg",
            "idnetifier" : "PROV"
          },
          {
            "name" : "Resolución",
            "icon" : "images/reso.svg",
            "idnetifier" : "RESO"
          }
        ]
      }
    };


  // ********************************  DIALOG de boton NUEVO ******************************** //
    $scope.newDocument = function(ev) {
        $mdDialog.show({
          controller: dialogController,
          templateUrl: '/views/newtod.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
        .then(function(answer) {
           console.log(answer);  //TOD que he seleccionado para instanciar un nuevo documento
           $scope.todSelected = answer;
         });
      };


  // ********************************  set TOD seleecionado dentro de Documentos en MENU IZQUIERDO ******************************** //
    $scope.docMenuSelected = function (index) {
      $scope.documentMenuSelected = $scope.documents.tod[index];
    };


  // ********************************  Borrador hasta tener web services ******************************** //
    $scope.documents = {
      "tod": [
        {
          "name" : "Acta",
          "identifier" : "ACTA"
        },
        {
          "name" : "Anexo",
          "identifier" : "ANEX"
        },
        {
          "name" : "Dictamen",
          "identifier" : "DICT"
        },
        {
          "name" : "Expediente",
          "identifier" : "EXP"
        },
        {
          "name" : "Nota",
          "identifier" : "NOTA"
        },
        {
          "name" : "Ordenanza",
          "identifier" : "ORDE"
        },
        {
          "name" : "Providencia",
          "identifier" : "PROV"
        },
        {
          "name" : "Anexo2",
          "identifier" : "ANEX2"
        },
        {
          "name" : "Dictamen2",
          "identifier" : "DICT2"
        },
        {
          "name" : "Expediente2",
          "identifier" : "EXP2"
        },
        {
          "name" : "Nota2",
          "identifier" : "NOTA2"
        },
        {
          "name" : "Ordenanza2",
          "identifier" : "ORDE2"
        },
        {
          "name" : "Providencia2",
          "identifier" : "PROV2"
        },
        {
          "name" : "Resolución",
          "identifier" : "RESO"
        }
      ]
    };


  }])


  // ******************************** MENU IZQUIERDO - DIRECTIVA ******************************** //
  // Directiva para dar funcionamiento al Menu izquierdo
  .directive('onFinishRender', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {

            // Enables expand functionality in subtrees.
            var activateLists = function() {
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
