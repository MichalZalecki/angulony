'use strict';

class ClientsResource {
  constructor($resource) {
    let resource = $resource("http://localhost:3000/clients/:id", { id: "@id" },
      {
        'create':  { method: 'POST' },
        'index':   { method: 'GET', isArray: true },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'destroy': { method: 'DELETE' }
      }
    );
    return resource;
  }
}

export default angular.module('clients.clients-resource.service', [])
  .service('ClientsResource', ClientsResource);
