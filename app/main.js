'use strict';

// require('oclazyload');
// require('angular-ui-router');
// require('angular-messages');
// require('angular-resource');

export default angular.module('appName', [
  'ui.router',
  'oc.lazyLoad',
  'ngResource',
  'ngMessages',
  require('common/greeting').name,
  require('home/home.routing').name,
  require('about/about.routing').name,
  require('clients/clients.routing').name
]);
