import * as angular from 'angular';

TrafficService.$inject = ['$http', '$q'];
function TrafficService($http, $q) {

  var dfd = $q.defer();
  var data = null;
  
  function checkCurrentStatus() {
    const url = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25';

    return $http.get(url)
      .then((response) => {
        data = response.data;
        dfd.resolve(response.data);
      });
  }

  function getData() {
    if(data) {
      dfd.resolve(data);
    } else {
      checkCurrentStatus();
    }
    return dfd.promise;
  }

  return{
    getData:getData,
    checkCurrentStatus:checkCurrentStatus
  }
}

angular
  .module('services')
  .factory('TrafficService', TrafficService);

