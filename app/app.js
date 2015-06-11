'use strict';

require('assets/scss/app.scss');

export default angular.module('appName', [
  // files added to vendors.bundle.js are already
  // available do you don't have to require them
  'ui.router',
  'oc.lazyLoad',
  'ngResource',
  'ngMessages',
  // require angular modules which we created
  require('commons/greeting').name,
  require('pages/home').name,
  require('pages/about').name,
  require('pages/clients').name
]);
