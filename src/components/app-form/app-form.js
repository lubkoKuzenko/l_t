import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './app-form.component';

const formModule = angular.module('appForm', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('form', {
      url: '/form',
      template: '<app-form></app-form>'
    });
})

.component('appForm', component);

export default formModule;