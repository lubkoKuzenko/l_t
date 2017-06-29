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

// Spin.js
import 'angular-spinner/dist/angular-spinner';

import './components/';
import './services';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap/ui-bootstrap-csp.css';
import 'highcharts-ng/dist/highcharts-ng.css';
import 'angularjs-slider/dist/rzslider.min.css';
import 'ng-table/bundles/ng-table';
import 'clusterize.js/clusterize.css';
import 'angular-snap/angular-snap.css';

import './styles.scss';

angular
  .module('myApp', [
    uiRouter,
    ngAnimate,
    uiMask,
    Bootstrap,
    'angularSpinner',
    'snap',
    'rzModule',
    'services',
    'app.components'
  ])
  .config(['uiMask.ConfigProvider', function (uiMaskConfigProvider) {
    uiMaskConfigProvider.clearOnBlur(true);
    uiMaskConfigProvider.eventsToHandle(['input', 'keyup', 'click']);
  }])
  .config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
    usSpinnerConfigProvider.setDefaults({
      lines: 13,
      length: 28,
      width: 14,
      radius: 42,
      scale: 1.00,
      corners: 1.0,
      opacity: 0.25,
      rotate: 0,
      direction: 1,
      speed: 1.0,
      trail: 60
    });
  }])
  .config(snapRemoteProvider => { snapRemoteProvider.globalOptions.disable = 'right'; })
  // or snapRemoteProvider.globalOptions = { disable: 'right', // ... others options }
  .directive('app', AppComponent);