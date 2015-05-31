'use strict';

require('oclazyload');
require('angular-ui-router');

export default angular.module('appName', [
  'ui.router',
  'oc.lazyLoad',
  require('common/greeting').name,
  require('home/home').name,
]).config(function($stateProvider, $locationProvider, $urlRouterProvider) {
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
});
