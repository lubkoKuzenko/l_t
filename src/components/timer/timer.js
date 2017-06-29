import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timerComponent from './timer.component';

// Timer
import 'angular-timer/dist/angular-timer';

const timerModule = angular.module('timer', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('timer', {
        url: '/timer',
        template: '<timer-page></timer-page>'
      });
  })

  .component('timerPage', timerComponent);

export default timerModule;