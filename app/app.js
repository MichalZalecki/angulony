'use strict';

require('./scss/app.scss');

export default angular.module('appName', [
  // files added to vendors.bundle.js are already
  // available do you don't have to require them
  'ui.router',
  'oc.lazyLoad',
  'ngResource',
  'ngMessages',
  // require angular modules which we created
  require('common/greeting').name,
  require('home/home.routing').name,
  require('about/about.routing').name,
  require('clients/clients.routing').name
]);
