class ClientsIndexController {
  constructor(ClientsResource) {
    this.clients = ClientsResource.index({}, () => {console.log(this.clients)});

    this.destroy = clientDestroy;

    function clientDestroy(id) {
      ClientsResource.destroy({id: id});
      this.clients = this.clients.filter((c) => c.id !== id);
    }
  }
}

export default angular.module('clients.index.controller', [])
  .controller('ClientsIndexController', ClientsIndexController);
