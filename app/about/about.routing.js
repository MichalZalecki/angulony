'use strict';

function aboutRouting($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutController as about',
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

export default angular.module('about.routing', [])
  .config(aboutRouting);
