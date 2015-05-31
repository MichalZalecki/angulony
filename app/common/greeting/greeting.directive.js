'use strict';

class GreetingCtrl {
  constructor($scope) {
    this.person = 'Michał';
  }
}
// GreetingCtrl.$inject = ['$scope']

export default angular
  .module('greeting.directive', [])
  .directive('greeting', () => {
    require('./greeting.scss');
    return {
      // controller: ['$scope', GreetingCtrl], // without GreetingCtrl.$inject
      controller: GreetingCtrl,
      controllerAs: 'greeting',
      // templateUrl: './modules/greeting/greeting.html' // or require raw html
      template: require('./greeting.html')
    }
  });
