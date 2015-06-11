'use strict';

class AboutController {
  constructor() {
    this.info = "We're awesome!";
  }
}

export default angular.module('about.controller', [])
  .controller('AboutController', AboutController);
