'use strict';

function CarsFactory($resource) {
  return $resource("http://localhost:3000/api/cars/:id", { id: "@id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
}

export default angular.module('cars.factory', [])
  .factory('CarsFactory', CarsFactory);
