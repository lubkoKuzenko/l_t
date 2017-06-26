import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NestedComponent from './nested.component';
import NameComponent from './name/name.component';

const nestedModule = angular.module('nested', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('nested', {
      url: '/nested',
      template: '<nested></nested>'
    });
})

.component('nested', NestedComponent)
.component('name', NameComponent);

export default nestedModule;
