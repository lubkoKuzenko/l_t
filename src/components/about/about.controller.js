export default class ItemController {
	
	constructor($scope, $rootScope, $state, $stateParams, $location, $q, $http, $window, NgMap) {
		this.$location = $location;
		this.$window = $window;
		this.$stateParams = $stateParams;
		this.$rootScope = $rootScope;
		this.$scope = $scope;

		this.$scope.$watch("vm.items", (item) => {
			if(item){
				this.item = item[$stateParams.id];
				this.longCapacity = 100 * this.item.properties.layers['parking.garage'].data.FreeSpaceLong / this.item.properties.layers['parking.garage'].data.LongCapacity || 0.000001;
				this.shortCapacity = 100 * this.item.properties.layers['parking.garage'].data.FreeSpaceShort / this.item.properties.layers['parking.garage'].data.ShortCapacity || 0.00001;
				this.coordinates = this.item.geometry.coordinates;
			}
		})
	}
	
	back(item){
		this.$window.history.back();
	}
}