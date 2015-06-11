'use strict';

class ClientsEditController {
  constructor(ClientsResource, $state, $stateParams) {

    this.defaultClient = ClientsResource.show({id: $stateParams.id}, () => {
      this.client = angular.copy(this.defaultClient);
    });

    this.save = saveClient;
    this.reset = resetClient;

    function saveClient() {
      if(this.form.$valid) {
        this.result = ClientsResource.update({id: this.client.id, client: this.client}, () => {
          $state.go('clients.show', {id: this.result.id});
        });
      }
    }

    function resetClient() {
      this.client = angular.copy(this.defaultClient);
      this.form.$setPristine();
    }
  }
}

export default angular.module('clients.edit.controller', [])
  .controller('ClientsEditController', ClientsEditController);
