export default class HomeController {

	constructor($scope, $location, NgTableParams, TrafficService) {
		this.$location = $location;
		this.$scope = $scope;	
		this.items = [];

		this.tableParams = new NgTableParams({
			page: 1
		},{
			counts: [5, 10, 20, 50],
			getData: params => {
				return TrafficService.getData().then((data) => {
					this.items = data.features;
					params.total(data.features.length);
					return data.features;
					
				});
			}
		});
	}
	
	showClient(item){
		const id = this.items.map(e => (e.properties.title)).indexOf(item.properties.title);
		
		if(item.available){
			this.$location.path("/item/" + id);
		} else {
			alert("No available places.")
		}
	}
}