export default class NestedController {
	
  constructor($state, $scope, TrafficService) {
    TrafficService.getData().then((data) => {
      this.items = data.features;
    });

    $scope.$on('item_title', (event, data) => {
      this.emitData = data;
      $scope.$apply();
    });
  }
}