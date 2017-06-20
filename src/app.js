import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'highcharts-ng/dist/highcharts-ng';
import 'ngmap/build/scripts/ng-map.min';

import 'chart.js/dist/Chart.js';
import 'angular-chart.js/dist/angular-chart.js';

// main app component
import AppComponent from './app.component';

import './components/';
import './services';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highcharts-ng/dist/highcharts-ng.css';
import './styles.scss';

angular.module('myApp', [
  uiRouter,
  'services',
  'app.components'
])

.directive('app', AppComponent);