export default class ItemController {
	
  constructor($stateParams, $window, NgMap, TrafficService) {
    this.$window = $window;
    this.$stateParams = $stateParams;
    TrafficService.getData().then((data) => {
      this.item = data.features[$stateParams.id];
      this.longCapacity = 100 * this.item.properties.layers['parking.garage'].data.FreeSpaceLong / this.item.properties.layers['parking.garage'].data.LongCapacity || 0.000001;
      this.shortCapacity = 100 * this.item.properties.layers['parking.garage'].data.FreeSpaceShort / this.item.properties.layers['parking.garage'].data.ShortCapacity || 0.00001;
      this.coordinates = this.item.geometry.coordinates;
    });
  }
	
	back(item){
		this.$window.history.back();
	}
}