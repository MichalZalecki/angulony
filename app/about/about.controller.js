'use strict';

class AboutController {
  constructor(foo) {
    this.info = "We're awesome!";
  }
}

export default angular.module('about.controller', [])
  .controller('AboutController', AboutController);
