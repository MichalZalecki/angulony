'use strict';

function homeRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeController as home',
      resolve: {
        foo: function($q, $ocLazyLoad) {
          return $q((resolve) => {
            require.ensure([], function() {
              let module = require('home/home');
              $ocLazyLoad.load({
                name: 'home',
              });
              resolve(module.controller);
            });
          });
        }
      }
    });
};

export default angular.module('home.config', [])
  .config(homeRouting);