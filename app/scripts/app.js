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
    'cendra.builder'
  ])

  // COLOR
  // .config(function($mdThemingProvider) {
  //   $mdThemingProvider.theme('default')
  //   .primaryPalette('blue-grey', {})
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
      .state('index.document', {
        url: '/document',
        templateUrl: 'views/document.html',
        controller: 'DocumentCtrl'
      })
      .state('index.template', {
        url: '/todtemplate',
        templateUrl: 'views/todtemplate.html',
        controller: 'TodtemplateCtrl'
      })

  });
