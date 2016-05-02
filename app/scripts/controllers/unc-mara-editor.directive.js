(function() {
    'use strict';

    angular
    .module('frontendApp')
    .directive('uncEditor', ['$timeout', directive]);

    /* @ngInject */
    function directive($timeout) {
      var directive = {
        restrict: 'E',
        template: '<div id="unc-div-editor"><textarea ui-tinymce="vm.tinymceOptions" ng-model="vm.tinymceModel"></textarea></div>',
        scope: {
        },
        link: linkFunc,
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      function linkFunc(scope, element, attr, ctrl) {
          // var heightN = 0;

        $timeout(function () {
          ctrl.altura = element.context.clientHeight;
          window.addEventListener('resize', function () {

            element[0].querySelector('iframe').style.height = document.getElementById('unc-editor').clientHeight - getHeight() + "px";
          });
        }, 0);
        ctrl.setHeight = function () {
          $timeout(function () {



            element[0].querySelector('iframe').style.height = ctrl.altura - getHeight() + "px";
          }, 0);
        }

        function getHeight() {
            return element[0].querySelectorAll('.mce-container-body .mce-flow-layout')[0].clientHeight +
              element[0].querySelectorAll('.mce-container-body .mce-flow-layout')[1].clientHeight +
              element[0].querySelectorAll('.mce-container-body .mce-flow-layout')[2].clientHeight + 30;
        }
      }
    }

    Controller.$inject = [];

    /* @ngInject */
    function Controller() {
      var vm = this;
      vm.tinymceModel = null;
      vm.tinymceOptions = null;

      activate();


      function activate() {

        vm.tinymceOptions = {
          selector: 'textarea',          // change this value according to your HTML
          language_url : 'langs/es.js',   // site absolute URL
          theme: "modern",               //Hace uso del skin agregado
          // skin: 'lightgray',             //skin default: lightgray
          skin_url: '/skin/lightmara',

          menu: {
            file: {title: 'File', items: 'newdocument | print'},
            edit: {title: 'Edit', items: 'undo redo | cut copy paste | searchreplace | selectall'},
            insert: {title: 'Insert', items: 'link | image | hr pagebreak | charmap | template'},
            view: {title: 'View', items: 'visualaid fullscreen preview'},
            format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | removeformat'},
            table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'}
          },
          toolbar: 'fontsizeselect bold italic underline strikethrough superscript subscript | removeformat | alignleft aligncenter alignright alignjustify | outdent indent blockquote ltr rtl | bullist numlist | link image hr pagebreak | preview fullscreen',

          // plugins: ['anchor charmap code contextmenu directionality fullscreen hr image imagetools insertdatetime link media nonbreaking pagebreak paste print preview',
            // 'save searchreplace spellchecker table template textcolor textpattern visualblocks visualchars'
        // ],            //Plugins necesarios para que funcionen las herramientas no basicas de toolbar

      plugins: [  "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste imagetools"
              ],
              //  imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
//imagen de prueba: //www.tinymce.com/images/glyph-tinymce@2x.png
      // automatic_uploads: false,
      // images_upload_url: ''
      // imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",

        //Personaliza el template que se inserta
        templates: [
          {title: 'Plantilla Test', description: 'Descripción ...', url:'../../views/templates/templateTest.html'} //put full path to url
        ],

        // true: Habilita que se utilice el corrector ortografico del browser
        browser_spellcheck: true,

        content_css: '/skin/lightmara/skin-table.css',
        // content_css: [
        //   '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        //   '//www.tinymce.com/css/codepen.min.css'
        // ],

       resize: false,

        // true: deshabilita el menu contextuald sobre la zona del editor
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
          // editor.on('click', function(e) {
          //   vm.tinymceModel = 'Time: ' + (new Date());
          //   console.log('Editor was clicked');
          // });
          editor.on('init', function (editor) {
            vm.setHeight();
          });
        }

        // Tamaño maximo que el usuario puede estirar toda la interfaz
        // max_height: newValue
        //  max_width: 500

        // Alto del area editable en pixeles
        //  height: newValue;
      };

    }
  } //fin function Controller

})();
