'use strict';

function aboutRouting($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutController as about',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let mod = require('about/about');
              $ocLazyLoad.load({name: 'about'});
              resolve(mod.controller);
            });
          });
        }
      }
    });
};

export default angular.module('about.routing', [])
  .config(aboutRouting);
