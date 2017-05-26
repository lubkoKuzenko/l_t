import * as angular from 'angular';

export class TrafficService {
  
  constructor($http) {
    this._$http = $http;
  }

  checkCurrentStatus() {
    const url = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25';

    this.data = this._$http.get(url);
    return this.data;
  }
}

angular
  .module('services')
  .service('TrafficService', TrafficService);

