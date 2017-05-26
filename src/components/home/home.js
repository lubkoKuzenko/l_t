import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home items="vm.items"></home>'
    });
})

.component('home', homeComponent);

export default homeModule;