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
    'ui.router'
  ])

  // COLOR
  // .config(function($mdThemingProvider) {
  //   $mdThemingProvider.theme('default')
  //   .primaryPalette('indigo')
  //   .accentPalette('pink');
  // })

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
    .state('index.ACTA', {
      url: '/acta',
      templateUrl: 'views/acta.html',
      controller: 'ActaCtrl'
    })
    .state('index.DICT', {
      url: '/dict',
      templateUrl: 'views/dict.html',
      controller: 'DictCtrl'
    })
    .state('index.EXP', {
      url: '/exp',
      templateUrl: 'views/exp.html',
      controller: 'ExpCtrl'
    })
    .state('index.NOTA', {
      url: '/nota',
      templateUrl: 'views/nota.html',
      controller: 'NotaCtrl'
    })
    .state('index.ORDE', {
      url: '/orde',
      templateUrl: 'views/orde.html',
      controller: 'OrdeCtrl'
    })
    .state('index.PROV', {
      url: '/prov',
      templateUrl: 'views/prov.html',
      controller: 'ProvCtrl'
    })
    .state('index.RESO', {
      url: '/reso',
      templateUrl: 'views/reso.html',
      controller: 'ResoCtrl'
    })

  });
