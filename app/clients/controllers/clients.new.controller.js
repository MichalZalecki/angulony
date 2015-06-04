'use strict';

class ClientsNewController {
  constructor(ClientsResource, $state) {

    this.defaultClient = {};
    this.client = angular.copy(this.defaultClient);

    this.save = saveClient;
    this.reset = resetClient;

    function saveClient() {
      if(this.form.$valid) {
        this.result = ClientsResource.create({client: this.client}, () => {
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

export default angular.module('clients.new.controller', [])
  .controller('ClientsNewController', ClientsNewController);
