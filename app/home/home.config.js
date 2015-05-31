'use strict';

export default angular.module('home.config', [])
  .config(homeConfig);

function homeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html'
    });
};
