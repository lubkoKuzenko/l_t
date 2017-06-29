import template from './timer.html';
import controller from './timer.controller';

let TimerComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default TimerComponent;