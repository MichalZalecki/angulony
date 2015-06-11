'use strict';

function clientsRouting($stateProvider) {
  $stateProvider
    .state('clients', {
      url: '/clients',
      template: require('./views/clients.html'),
      controller: 'ClientsController as vm',
      resolve: {
        loadClientsController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let mod = require('./clients');
              $ocLazyLoad.load({name: 'clients'});
              resolve(mod.controller);
            });
          });
        }
      }
    })
      .state('clients.index', {
        url: '/index',
        template: require('./views/clients.index.html'),
        controller: 'ClientsIndexController as vm'
      })
      .state('clients.show', {
        url: '/show/:id',
        template: require('./views/clients.show.html'),
        controller: 'ClientsShowController as vm'
      })
      .state('clients.new', {
        url: '/new',
        template: require('./views/clients.new.html'),
        controller: 'ClientsNewController as vm'
      })
      .state('clients.edit', {
        url: '/edit/:id',
        template: require('./views/clients.edit.html'),
        controller: 'ClientsEditController as vm'
      })
      .state('clients.destroy', {
        url: '/destroy/:id',
        controller: 'ClientsDestroyController'
      });
};

export default angular.module('clients.routing', [])
  .config(clientsRouting);
