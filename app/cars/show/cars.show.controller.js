class CarsShowController {
  constructor(CarsFactory, $stateParams) {
    this.car = CarsFactory.show({id: $stateParams.id}, () => {console.log(this.car)});
  }
}

export default angular.module('cars.show.controller', [])
  .controller('CarsShowController', CarsShowController);
