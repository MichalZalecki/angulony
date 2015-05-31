'use strict';

require('oclazyload');
require('angular-ui-router');

export default angular.module('appName', [
  'ui.router',
  'oc.lazyLoad',
  require('common/greeting').name,
  require('home/home.routing').name,
  require('about/about.routing').name
]);
