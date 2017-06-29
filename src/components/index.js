import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Info from './info/info';
import Form from './app-form/app-form';
import Chart from './chart/chart';
import Timer from './timer/timer';
import Nested from './nested/nested';

export default angular.module('app.components', [
  Home.name,
  About.name,
  Info.name,
  Form.name,
  Chart.name,
  Timer.name,
  Nested.name
]);