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
            require.ensure([], function() {
              $ocLazyLoad.load({name: 'about'});
              resolve(require('about/about').controller);
            });
          });
        }
      }
    });
};

export default angular.module('about.routing', [])
  .config(aboutRouting);
