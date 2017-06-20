export default class HomeController {

	constructor($scope, $location) {
		this.$location = $location;
		this.$scope = $scope;	
	}
	
	showClient(item){
		const id = this.items.map((e) => { return e.properties.title;}).indexOf(item.properties.title);
		
		if(item.available){
			this.$location.path("/item/" + id);
		} else {
			alert("No available places.")
		}
	}
}