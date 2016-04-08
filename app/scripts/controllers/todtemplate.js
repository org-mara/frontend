'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TodtemplateCtrl
 * @description
 * # TodtemplateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('TodtemplateCtrl',  ['$scope', function ($scope) {


  $scope.myDate = new Date();
  $scope.cityDefault = "Córdoba";
  $scope.recipientDefault = "Sr/a.";
  $scope.refDEfault = "Ref: ";
    // console.log($scope);


 $scope.tinymceOptions = {
   selector: 'textarea',          // change this value according to your HTML
   language_url : 'langs/es.js',   // site absolute URL
   theme: "modern",               //Hace uso del skin agregado
   skin: 'light',
    menu: {},
    // menubar: true,
    plugins: ['hr link image charmap paste print preview anchor pagebreak spellchecker searchreplace visualblocks visualchars',
      'code fullscreen insertdatetime media nonbreaking save table template textcolor'
    ],            //Plugins necesarios para que funcionen las herramientas no basicas de toolbar
    toolbar: [
      'undo redo | cut copy paste | fontselect fontsizeselect | bold italic underline strikethrough subscript superscript| alignleft aligncenter alignright alignjustify | outdent indent blockquote | bullist numlist',
      'hr link unlink image charmap pastetext print preview anchor pagebreak spellchecker searchreplace visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'save cancel table ltr rtl emoticons template forecolor backcolor'
    ]
   // Tamaño maximo que el usuario puede estirar toda la interfaz
   //  max_height: 500
   //  max_width: 500

   // Alto del area editable en pixeles
   //height : 500

  //Para saber si el cuerpo del editor ha sido clickeado
  //  setup: function(editor) {
  //   editor.on('click', function(e) {
  //     console.log('Editor was clicked');
  //   });
  // }
 };

    $scope.schema = {
      _id: "56fc34da09a98486535f030f",
      objDescription: {
        en_US: "Note",
        es_AR: "Nota"
      },
      objName: "ENotaClass",
      objTitle: {
        en_US: "Note",
        es_AR: "Nota"
      },
      properties: {
        objName: {
          type: "string"
        },
        objTitle: {
          type: "string"
        },
        objDescription: {
          type: "string",
          default: "Nota"
        },
        objImplements: {
          type: "string"
        },
        objTags: {
          type: "array",
          items: {
            type: "string",
            default: "Nota"
          }
        },
        city: {
          type: "string"
        },
        reference: {
          type: "string"
        },
        body: {
          type: "string"
        },
        created: {
          type: "string",
          format: "date-time"
        },
        adminUnit: {
          type: "string"
        },
        user: {
          type: "string"
        },
        pdf: {
          type: "string"
        }
      },
      required: [
        "objName",
        "city",
        "body"
      ],
      type: "object"
    };




// [{
// _id: "56fc34da09a98486535f030f",
// objDescription: {
// en_US: "Note",
// es_AR: "Nota"
// },
// objName: "ENotaClass",
// objTitle: {
// en_US: "Note",
// es_AR: "Nota"
// },
// properties: {
// objName: {
// type: "string"
// },
// objTitle: {
// type: "string"
// },
// objDescription: {
// type: "string",
// default: "Nota"
// },
// objImplements: {
// type: "string"
// },
// objTags: {
// type: "array",
// items: {
// type: "string",
// default: "Nota"
// }
// },
// city: {
// type: "string"
// },
// reference: {
// type: "string"
// },
// body: {
// type: "string"
// },
// created: {
// type: "string",
// format: "date-time"
// },
// adminUnit: {
// type: "string"
// },
// user: {
// type: "string"
// },
// pdf: {
// type: "string"
// }
// },
// required: [
// "objName"
// ],
// type: "object"
// },
// {
// objName: "EProvClass",
// objTitle: {
// en_US: "Providence",
// es_AR: "Providencia"
// },
// objDescription: {
// en_US: "Providence",
// es_AR: "Providencia"
// },
// type: "object",
// properties: {
// objName: {
// type: "string"
// },
// objTitle: {
// type: "string"
// },
// objDescription: {
// type: "string",
// default: "Providencia"
// },
// objTags: {
// type: "array",
// items: {
// type: "string"
// }
// },
// header: {
// type: "string"
// },
// body: {
// type: "string"
// },
// created: {
// type: "string",
// format: "date-time"
// },
// adminUnit: {
// type: "string"
// },
// user: {
// type: "string"
// },
// pdf: {
// type: "string"
// }
// },
// required: [
// "objName"
// ],
// _id: "56fd44e1f2362ec114984b3a"
// }
// ]

    $scope.test = {};
    $scope.done = function(canceled) {
      if(!canceled) {
        //Enviar a api
      }
      console.log($scope.test);
    }
  }]);
