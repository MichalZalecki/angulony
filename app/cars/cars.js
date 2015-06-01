'use strict';

require('./cars.scss');

export default angular.module('cars', [
  require('./cars.factory').name,
  require('./cars.controller').name,
  require('./index/cars.index.controller').name,
  require('./show/cars.show.controller').name
]);

