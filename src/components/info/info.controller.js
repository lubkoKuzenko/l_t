export default class InfoController {

	constructor($scope, $timeout) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.visible = false;
	}

	$onInit(){
		this.priceSlider = {
			value: 100,
			options: {
				floor: 0,
				ceil: 500
			}
		};
		
	}

	toggle(){
		this.visible = !this.visible;
    	if (this.visible){
			this.refreshSlider();
		}
	}

	refreshSlider() {
		this.$timeout(() => {
			this.$scope.$broadcast('rzSliderForceRender');
		});
	};
}