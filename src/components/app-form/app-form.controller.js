export default class ApplicationFormController {

	constructor($scope) {
		this.$scope = $scope;

		this.user = {
			firstname: "",
			lastname: "",
			email: "",
			mobile: "",
			status: "",
			subject: "",
			message: ""
		}
	}

	onSubmit(){
		console.log(this.user)
	}
}