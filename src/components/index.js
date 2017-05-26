import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Info from './info/info';

export default angular.module('app.components', [
  Home.name,
  About.name,
  Info.name,
]);