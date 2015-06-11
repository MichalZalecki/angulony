'use strict';

require('./_assets/scss/app.scss');

export default angular.module('appName', [
  // files added to vendors.bundle.js are already
  // available do you don't have to require them
  'ui.router',
  'oc.lazyLoad',
  'ngResource',
  'ngMessages',
  // require angular modules which we created
  require('_common/greeting').name,
  require('home').name,
  require('about').name,
  require('clients').name
]);
