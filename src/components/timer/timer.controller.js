export default class TimerController {

	constructor($scope, $timeout) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.date = moment().format("DD-MM-YYYY");
		numbro.defaultCurrencyFormat('0,0[.]00');
		this.number = numbro(12345678).formatCurrency();

		this.setupCounter();
	}	

	setupCounter(){
		this.counter = 60;
		this.onTimeout = () => {
			this.counter--;
			mytimeout = this.$timeout(this.onTimeout, 1000);
		}
		var mytimeout = this.$timeout(this.onTimeout, 1000);
	}
}