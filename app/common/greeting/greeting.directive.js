'use strict';

class GreetingCtrl {
  constructor($scope, $log) {
    this.name = $scope.name;
    $scope.$watch( () => this.name, (newVal, oldVal) => {
      $log.log(`is ${newVal}, but was ${oldVal}`);
    });
  }
}

export default angular
  .module('greeting.directive', [])
  .directive('greeting', () => {
    require('./greeting.scss');
    return {
      controller: GreetingCtrl,
      controllerAs: 'greeting',
      scope: {
        name: '@'
      },
      // templateUrl: './modules/greeting/greeting.html' // or require raw html
      template: require('./greeting.html')
    }
  });
