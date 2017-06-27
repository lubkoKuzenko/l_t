import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NestedComponent from './nested.component';
import NameComponent from './name/name.component';
import ClusterizeComponent from './clusterize/clusterize.component';

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
.config(function($compileProvider) {
  $compileProvider.preAssignBindingsEnabled(true);
})

.component('nested', NestedComponent)
.component('clusterize', ClusterizeComponent)
.component('name', NameComponent);

export default nestedModule;
