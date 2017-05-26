export default class AppController {

	constructor(TrafficService) {
		this.TrafficService = TrafficService;
		this.getCurrentData();		
	}

	getCurrentData(){
		this.TrafficService.checkCurrentStatus().then((data) => {
			this.items = data.data.features;
			this.items.map(function(item) {
				return item.available = item.properties.layers['parking.garage'].data.FreeSpaceLong || item.properties.layers['parking.garage'].data.FreeSpaceShort;
			});
		});
	}
}