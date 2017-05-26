import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutComponent from './about.component';

const aboutModule = angular.module('about', [
  uiRouter,
  'ngMap'
])

.config(($stateProvider) => {
  $stateProvider
    .state('item', {
      url: '/item/:id',
      template: '<item items="vm.items"></item>'
    });
})

.component('item', AboutComponent);

export default aboutModule;
