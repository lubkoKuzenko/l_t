import template from './info.html';
import controller from './info.controller';

let infoComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default infoComponent;