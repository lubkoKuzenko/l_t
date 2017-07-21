var httpMock, qMock;
beforeEach(function(){
  module(function($provide){
    $provide.service('$http', function(){
      this.get= jasmine.createSpy('get');
    });
    $provide.service('$q', function(){
      this.defer = jasmine.createSpy('defer');
    });
  });
  module('services');
});

beforeEach(inject(function($http, $q){
  httpMock = $http;
  qMock = $q;
}));

it('should show alert when title is not passed into showDialog', function(){
  var url="Some url";

  expect(url).toBe("Some url");
});

it('url httpMock toHaveBeenCalledWith url', function(){
  var url="Some url";
  httpMock.get(url);

  expect(httpMock.get).toHaveBeenCalledWith(url);
});