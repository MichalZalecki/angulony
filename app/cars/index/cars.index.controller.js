class CarsIndexController {
  constructor(CarsFactory) {
    this.cars = CarsFactory.index({}, () => {console.log(this.cars)});
  }
}

export default angular.module('cars.index.controller', [])
  .controller('CarsIndexController', CarsIndexController);
