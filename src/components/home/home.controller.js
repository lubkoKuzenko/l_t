export default class HomeController {

	constructor($rootScope, $scope, $state, $http, $location, TrafficService) {
		this.$location = $location;
		this.$rootScope = $rootScope;
		this.$state = $state;
		this.TrafficService = TrafficService;
		this.$scope = $scope;	
	}
	
	showClient(item){
		const id = this.items.map((e) => { return e.properties.title;}).indexOf(item.properties.title);
		
		if(item.available){
			this.$rootScope.$broadcast("item:added", item);
			this.$location.path("/item/" + id);
		} else {
			alert("No available places.")
		}
	}

	info(){
		this.$location.path("/info/");
	}
}