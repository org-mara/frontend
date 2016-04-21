'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',  //borra luego de que funcione ui.route
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'cendra.builder',
    'ui.tinymce',
  ])

  // COLOR
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey', {})
    .accentPalette('orange');
  })

  // ******************************** CALENDARIO ******************************** //
  .config(function($mdDateLocaleProvider) {
    // Español
    $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Oct', 'Nov', 'Dic'];
    $mdDateLocaleProvider.days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    $mdDateLocaleProvider.shortDays = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/main");

    // Set up the states
    $stateProvider
      .state('index', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('index.document', {
        url: '/document',
        templateUrl: 'views/document.html',
        controller: 'DocumentCtrl'
      })
      .state('index.template', {
        url: '/todtemplate',
        templateUrl: 'views/todtemplate.html',
        controller: 'TodtemplateCtrl',
        controllerAs: 'vm'
      })

  });
