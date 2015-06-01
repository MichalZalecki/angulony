'use strict';

function homeRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeController as home',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], function() {
              $ocLazyLoad.load({name: 'home'});
              resolve(require('home/home').controller);
            });
          });
        }
      }
    });
};

export default angular.module('home.config', [])
  .config(homeRouting);
