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
          var deferred = $q.defer();

          require.ensure([], function() {
            let module = require('home/home');
            $ocLazyLoad.load({
              name: 'home',
            });
            deferred.resolve(module.controller);
          });

          return deferred.promise;
        }
      }
    });
};

export default angular.module('home.config', [])
  .config(homeRouting);
