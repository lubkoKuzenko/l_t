import template from './about.html';
import controller from './about.controller';

let AboutComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    items: '='
  }
};

export default AboutComponent;