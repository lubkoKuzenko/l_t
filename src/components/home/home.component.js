import template from './home.html';
import controller from './home.controller';

let homeComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default homeComponent;