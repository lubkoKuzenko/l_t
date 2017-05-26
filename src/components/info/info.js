import angular from 'angular';
import uiRouter from 'angular-ui-router';
import infoComponent from './info.component';

const infoModule = angular.module('info', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('info', {
      url: '/info/',
      template: '<info></info>'
    });
})

.component('info', infoComponent);

export default infoModule;