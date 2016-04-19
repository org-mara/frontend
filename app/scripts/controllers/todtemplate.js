'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TodtemplateCtrl
 * @description
 * # TodtemplateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')

  // .directive('uncEditor', uncEditor)
  .controller('TodtemplateCtrl',  ['$scope', function ($scope) {

    var vm = this;
    vm.tinymceModel = null;

    vm.myDate = new Date();
    vm.cityDefault = "Córdoba";
    vm.recipientDefault = "Sr/a.";
    vm.refDEfault = "Ref: ";

    vm.tinymceOptions = {
      selector: 'textarea',           // change this value according to your HTML
      language_url : 'langs/es.js',   // site absolute URL
      theme: "modern",                //Hace uso del skin agregado
      skin: 'light',                  //skin default: lightgray

       menu: {
         file: {title: 'File', items: 'newdocument | print'},
         edit: {title: 'Edit', items: 'undo redo | cut copy paste | searchreplace | selectall'},
         insert: {title: 'Insert', items: 'link | image | hr pagebreak | charmap | template'},
         view: {title: 'View', items: 'visualaid fullscreen preview'},
         format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | removeformat'},
         table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'}
       },
       toolbar: 'fontsizeselect bold italic underline strikethrough superscript subscript | removeformat | alignleft aligncenter alignright alignjustify | outdent indent blockquote ltr rtl | bullist numlist | link image hr pagebreak | preview fullscreen',

       plugins: ['hr link image charmap paste print preview anchor pagebreak spellchecker searchreplace visualblocks visualchars',
       'code fullscreen insertdatetime directionality media nonbreaking save table template textcolor textpattern preview image contextmenu'
       ],            //Plugins necesarios para que funcionen las herramientas no basicas de toolbar

       //Personaliza el template que se inserta
       templates: [
               {title: 'Plantilla Test', description: 'Descripción ...', url:'../../views/templates/templateTest.html'} //put full path to url
           ],

       // true: Habilita que se utilice el corrector ortografico del browser
       browser_spellcheck: true,

       // true: deshabilita el menu contextual sobre las palabras en el editor
       // contextmenu: true,

       //  contextmenu_never_use_native: false,

       //  save_onsavecallback: function () { console.log('Saved'); }

       // Permite escribir en marckdown y se transforma a HTML al dar enter
       textpattern_patterns: [
            {start: '*', end: '*', format: 'italic'},
            {start: '**', end: '**', format: 'bold'},
            {start: '#', format: 'h1'},
            {start: '##', format: 'h2'},
            {start: '###', format: 'h3'},
            {start: '####', format: 'h4'},
            {start: '#####', format: 'h5'},
            {start: '######', format: 'h6'},
            {start: '1. ', cmd: 'InsertOrderedList'},
            {start: '* ', cmd: 'InsertUnorderedList'},
            {start: '- ', cmd: 'InsertUnorderedList'}
         ],

         // Tamaño del previsualizador
         // theme_advanced_buttons3_add : "preview",
         // plugin_preview_width : "400",
         // plugin_preview_height : "600",

         setup: function(editor) {
           editor.on('click', function(e) {
             vm.tinymceModel = 'Time: ' + (new Date());
             console.log('Editor was clicked');
           });
         }

         // Tamaño maximo que el usuario puede estirar toda la interfaz
         // max_height: newValue
         //  max_width: 500

         // Alto del area editable en pixeles
        //  height: newValue;
   };

   vm.getContent = function() {
      console.log('Editor content:', vm.tinymceModel);
    };

    vm.setContent = function() {
      vm.tinymceModel = 'Time: ' + (new Date());
    };


   vm.getTextBody = function () {
     console.log(vm.tinymceModel);
    //  var und = new upndown();
    //  und.convert(vm.tinymceModel, function(err, markdown) {
    //    console.log(markdown);  // Outputs: # Hello, World !
    //   });
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

  // function uncEditor() {
  //   var directive = {
  //      link: link,
  //      template: '<div id="unc-div-editor"><textarea ui-tinymce="vm.tinymceOptions" ng-model="vm.tinymceModel"></textarea></div>',
  //      restrict: 'E',
  //      scope: {},
  //      controller: UncEditorCtrl,
  //      controllerAs: 'vm',
  //      bindToController: true
  //   };
  //   return directive;
  //
  //   function link(scope, element, attrs) {
  //     console.log(element);
  //     scope.altura = element.context.clientHeight;
  //
  //  };

    // function UncEditorCtrl($scope) {
        // var vm = this;
        // vm.tinymceModel = null;
        // $scope.altura = null;
        //   vm.tinymceOptions = null;

          // $scope.$watch('altura', function (newValue, oldValue) {
        //    // Tamaño maximo que el usuario puede estirar toda la interfaz
        //       vm.tinymceOptions.max_height = newValue;
        //    //  max_width: 500
         //
          //  $("#unc-div-editor iframe").css("height", 200);
        //    // Alto del area editable en pixeles
        //    vm.tinymceOptions.height = newValue;
          // });


                  //   vm.tinymceOptions = {
                  //     selector: 'textarea',          // change this value according to your HTML
                  //     language_url : 'langs/es.js',   // site absolute URL
                  //     theme: "modern",               //Hace uso del skin agregado
                  //     skin: 'light',             //skin default: lightgray
                   //
                  //      menu: {
                  //        file: {title: 'File', items: 'newdocument | print'},
                  //        edit: {title: 'Edit', items: 'undo redo | cut copy paste | searchreplace | selectall'},
                  //        insert: {title: 'Insert', items: 'link | image | hr pagebreak | charmap | template'},
                  //        view: {title: 'View', items: 'visualaid fullscreen preview'},
                  //        format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | removeformat'},
                  //        table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'}
                  //      },
                  //      toolbar: 'fontsizeselect bold italic underline strikethrough superscript subscript | removeformat | alignleft aligncenter alignright alignjustify | outdent indent blockquote ltr rtl | bullist numlist | link image hr pagebreak | preview fullscreen',
                   //
                  //      plugins: ['hr link image charmap paste print preview anchor pagebreak spellchecker searchreplace visualblocks visualchars',
                  //      'code fullscreen insertdatetime directionality media nonbreaking save table template textcolor textpattern preview image contextmenu'
                  //      ],            //Plugins necesarios para que funcionen las herramientas no basicas de toolbar
                   //
                  //      //Personaliza el template que se inserta
                  //      templates: [
                  //              {title: 'Plantilla Test', description: 'Descripción ...', url:'../../views/templates/templateTest.html'} //put full path to url
                  //          ],
                   //
                  //      // true: Habilita que se utilice el corrector ortografico del browser
                  //      browser_spellcheck: true,
                   //
                  //      // true: deshabilita el menu contextual sobre las palabras en el editor
                  //      // contextmenu: true,
                   //
                  //      //  contextmenu_never_use_native: false,
                   //
                  //      //  save_onsavecallback: function () { console.log('Saved'); }
                   //
                  //      // Permite escribir en marckdown y se transforma a HTML al dar enter
                  //      textpattern_patterns: [
                  //           {start: '*', end: '*', format: 'italic'},
                  //           {start: '**', end: '**', format: 'bold'},
                  //           {start: '#', format: 'h1'},
                  //           {start: '##', format: 'h2'},
                  //           {start: '###', format: 'h3'},
                  //           {start: '####', format: 'h4'},
                  //           {start: '#####', format: 'h5'},
                  //           {start: '######', format: 'h6'},
                  //           {start: '1. ', cmd: 'InsertOrderedList'},
                  //           {start: '* ', cmd: 'InsertUnorderedList'},
                  //           {start: '- ', cmd: 'InsertUnorderedList'}
                  //        ],
                   //
                   //
                  //        // Tamaño del previsualizador
                  //        // theme_advanced_buttons3_add : "preview",
                  //        // plugin_preview_width : "400",
                  //        // plugin_preview_height : "600",
                   //
                   //
                  //        setup: function(editor) {
                  //          editor.on('click', function(e) {
                  //            vm.tinymceModel = 'Time: ' + (new Date());
                  //            console.log('Editor was clicked');
                  //          });
                  //        }
                   //
                   //
                  //        // Tamaño maximo que el usuario puede estirar toda la interfaz
                  //        // max_height: newValue
                  //        //  max_width: 500
                   //
                  //        // Alto del area editable en pixeles
                  //       //  height: newValue;
                  //  };


        //  });

    // };
  // };
