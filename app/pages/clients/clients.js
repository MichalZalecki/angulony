'use strict';

require('./styles/clients.scss');

export default angular.module('clients', [
  require('./services/clients.clients-resource.service').name,
  require('./controllers/clients.controller').name,
  require('./controllers/clients.index.controller').name,
  require('./controllers/clients.show.controller').name,
  require('./controllers/clients.new.controller').name,
  require('./controllers/clients.edit.controller').name,
]);

