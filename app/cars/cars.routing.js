'use strict';

function carsRouting($stateProvider) {
  $stateProvider
    .state('cars', {
      url: '/cars',
      templateUrl: 'cars/cars.html',
      controller: 'CarsController as cars',
      resolve: {
        loadCarsController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              $ocLazyLoad.load({name: 'cars'});
              resolve(require('cars/cars').controller);
            });
          });
        }
      }
    })
      .state('cars.index', {
        url: '/index',
        templateUrl: 'cars/index/cars.index.html',
        controller: 'CarsIndexController as carsIndex'
      })
      .state('cars.show', {
        url: '/show/:id',
        templateUrl: 'cars/show/cars.show.html',
        controller: 'CarsShowController as carsShow'
      });
};

export default angular.module('cars.routing', [])
  .config(carsRouting);
