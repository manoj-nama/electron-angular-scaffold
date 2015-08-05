'use strict';

/**
 * @ngdoc overview
 * @name cvGuiApp
 * @description
 * # cvGuiApp
 *
 * Main module of the application.
 */
angular
  .module('cvGuiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('master', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
    $urlRouterProvider.otherwise('/');
  });
