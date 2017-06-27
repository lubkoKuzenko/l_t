export default class NestedController {
	
  constructor($state, $scope, TrafficService) {
    TrafficService.getData().then((data) => {
      this.items = data.features;
    });

    $scope.$on('item_title', (event, data) => {
      this.emitData = this.items[data].properties.layers["parking.garage"].data.Name;
      $scope.$apply();
    });
  }
}