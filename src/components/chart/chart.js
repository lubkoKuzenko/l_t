import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chartComponent from './chart.component';

const chartModule = angular.module('chart', [
  'chart.js',
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('chart', {
      url: '/chart',
      template: '<chart></chart>'
    });
})

.component('chart', chartComponent);

export default chartModule;