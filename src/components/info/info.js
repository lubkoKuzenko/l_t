import angular from 'angular';
import uiRouter from 'angular-ui-router';
import infoComponent from './info.component';
import 'angular-youtube-embed/dist/angular-youtube-embed.min';

const infoModule = angular.module('info', [
  'youtube-embed',
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('info', {
      url: '/info',
      template: '<info></info>'
    });
})

.component('info', infoComponent);

export default infoModule;