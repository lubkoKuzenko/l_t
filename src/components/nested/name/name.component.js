import template from './name.html';
import controller from './name.controller';

let NameComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindings:{
      data: '<'
  }
};

export default NameComponent;