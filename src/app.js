import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import uiMask from 'angular-ui-mask';
import Bootstrap from 'angular-ui-bootstrap';

// Snap.js
import 'angular-snap/angular-snap';

// Slider
import 'angularjs-slider/dist/rzslider';

// Highcharts
import 'highcharts-ng/dist/highcharts-ng';

// Google Maps
import 'ngmap/build/scripts/ng-map.min';

// Chart.js
import 'chart.js/dist/Chart.js';
import 'angular-chart.js/dist/angular-chart.js';

// Ng-Table
import 'ng-table/bundles/ng-table';

// UI Mask
import 'angular-ui-mask/dist/mask.min';

// main app component
import AppComponent from './app.component';

import './components/';
import './services';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap/ui-bootstrap-csp.css';
import 'highcharts-ng/dist/highcharts-ng.css';
import 'angularjs-slider/dist/rzslider.min.css';
import 'ng-table/bundles/ng-table';
import 'angular-snap/angular-snap.css';

import './styles.scss';

angular
  .module('myApp', [
    uiRouter,
    ngAnimate,
    uiMask,
    Bootstrap,
    'snap',
    'rzModule',
    'services',
    'app.components'
  ])
  .config(['uiMask.ConfigProvider', function(uiMaskConfigProvider) {
    uiMaskConfigProvider.clearOnBlur(true);
    uiMaskConfigProvider.eventsToHandle(['input', 'keyup', 'click']);
  }])
  .config(snapRemoteProvider => { snapRemoteProvider.globalOptions.disable = 'right'; })
  // or snapRemoteProvider.globalOptions = { disable: 'right', // ... others options }
  .directive('app', AppComponent);