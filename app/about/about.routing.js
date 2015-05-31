'use strict';

function aboutRouting($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutController as about',
      resolve: {
        foo: function($q, $ocLazyLoad) {
          var deferred = $q.defer();

          require.ensure([], function() {
            let module = require('about/about');
            $ocLazyLoad.load({
              name: 'about',
            });
            deferred.resolve(module.controller);
          });

          return deferred.promise;
        }
      }
    });
};

export default angular.module('about.routing', [])
  .config(aboutRouting);
