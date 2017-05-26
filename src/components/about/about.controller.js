export default class ItemController {
	
	constructor($scope, $rootScope, $state, $stateParams, $location, $q, $http, $window, NgMap) {
		this.$location = $location;
		this.$window = $window;
		this.$stateParams = $stateParams;
		this.$rootScope = $rootScope;
		this.$scope = $scope;

		var vm = this;

		this.$scope.$watch("vm.items", function(item){
			if(item){
				vm.item = item[$stateParams.id];
				vm.longCapacity = 100 * vm.item.properties.layers['parking.garage'].data.FreeSpaceLong / vm.item.properties.layers['parking.garage'].data.LongCapacity || 0.000001;
				vm.shortCapacity = 100 * vm.item.properties.layers['parking.garage'].data.FreeSpaceShort / vm.item.properties.layers['parking.garage'].data.ShortCapacity || 0.00001;
				vm.coordinates = vm.item.geometry.coordinates;
			}
		})
	}
	
	back(item){
		this.$window.history.back();
	}
}