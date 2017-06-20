import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Highcharts
import 'highcharts-ng/dist/highcharts-ng';

// Google Maps
import 'ngmap/build/scripts/ng-map.min';

// Chart.js
import 'chart.js/dist/Chart.js';
import 'angular-chart.js/dist/angular-chart.js';

// Ng-Table
import 'ng-table/bundles/ng-table';

// main app component
import AppComponent from './app.component';

import './components/';
import './services';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highcharts-ng/dist/highcharts-ng.css';
import 'ng-table/bundles/ng-table';
import './styles.scss';

angular.module('myApp', [
  uiRouter,
  'services',
  'app.components'
])

.directive('app', AppComponent);