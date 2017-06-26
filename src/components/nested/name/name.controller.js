export default class NameController {
	
  constructor($scope) {
      this.$scope = $scope;
  }

  onButtonClick(data){
      this.$scope.$emit('item_title', data);
  }
}