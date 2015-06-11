'use strict';

function homeRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController as vm',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let mod = require('./home');
              $ocLazyLoad.load({name: 'home'});
              resolve(mod.controller);
            });
          });
        }
      }
    });
};

export default angular.module('home.config', [])
  .config(homeRouting);
