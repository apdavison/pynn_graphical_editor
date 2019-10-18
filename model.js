var jobService = angular.module('jobService', ['ngResource']);

var base_url = "https://nmpi.hbpneuromorphic.eu/api/v2";

jobService.factory('jobService', ['$resource',
  function($resource){
    //return $resource( base_url + '/queue', {id:'@eId'}, {
    return $resource( base_url + '/queue', {}, {
      get: { method: 'GET', params:{ format:'json' }, headers:{ 'Content-Type':'application/json' } },
      post: { method: 'POST', params:{ format:'json' }, headers:{ 'Content-Type':'application/json' } }
    });
  }]);
