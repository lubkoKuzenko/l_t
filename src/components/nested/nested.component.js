import template from './nested.html';
import controller from './nested.controller';

let NestedComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default NestedComponent;