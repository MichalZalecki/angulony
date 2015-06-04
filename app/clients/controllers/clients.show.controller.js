class ClientsShowController {
  constructor(ClientsResource, $stateParams) {
    this.client = ClientsResource.show({id: $stateParams.id}, () => {
      console.log(this.client);
    });
  }
}

export default angular.module('clients.show.controller', [])
  .controller('ClientsShowController', ClientsShowController);
