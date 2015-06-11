'use strict';

class HomeController {
  constructor() {
    this.info = "In home!";
  }
}

export default angular.module('home.controller', [])
  .controller('HomeController', HomeController);
