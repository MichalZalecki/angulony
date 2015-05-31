'use strict';

function aboutConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutController as about',
    });
};

export default angular.module('about.config', [])
  .config(aboutConfig);
