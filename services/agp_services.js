(function() {
  "use strict";

  angular.module("agp.services")
  .service("Devs",["$http", "$q", "constants", Devs]);

  function Devs($http, $q, constants) {
    return {
      devs: function() {
        var defer = $q.defer();

        $http.get(constants.apiDomain + constants.devsEndpoint)
        .then(function(response) {
          defer.resolve(response);
        })
        .catch(function(error) {
          defer.reject(error);
        });
        return defer.promise;
      }
    };
  }
}).call();
