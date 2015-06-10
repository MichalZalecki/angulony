'use strict';

function clientsRouting($stateProvider) {
  $stateProvider
    .state('clients', {
      url: '/clients',
      templateUrl: 'clients/views/clients.html',
      controller: 'ClientsController as vm',
      resolve: {
        loadClientsController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let mod = require('clients/clients');
              $ocLazyLoad.load({name: 'clients'});
              resolve(mod.controller);
            });
          });
        }
      }
    })
      .state('clients.index', {
        url: '/index',
        templateUrl: 'clients/views/clients.index.html',
        controller: 'ClientsIndexController as vm'
      })
      .state('clients.show', {
        url: '/show/:id',
        templateUrl: 'clients/views/clients.show.html',
        controller: 'ClientsShowController as vm'
      })
      .state('clients.new', {
        url: '/new',
        templateUrl: 'clients/views/clients.new.html',
        controller: 'ClientsNewController as vm'
      })
      .state('clients.edit', {
        url: '/edit/:id',
        templateUrl: 'clients/views/clients.edit.html',
        controller: 'ClientsEditController as vm'
      })
      .state('clients.destroy', {
        url: '/destroy/:id',
        controller: 'ClientsDestroyController'
      });
};

export default angular.module('clients.routing', [])
  .config(clientsRouting);
