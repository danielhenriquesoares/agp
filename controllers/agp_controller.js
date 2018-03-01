(function() {
  "use strict";

  angular.module("agp.controllers")
  .controller("Agp", ["$scope", "Devs", Agp]);

  function Agp($scope, devs) {
    $scope.devsFromApi = [];

    $scope.agpDevsOporto = [{
      "firstname": "Ricardo",
      "lastname": "Vicente"
    },{
      "firstname": "Yvette",
      "lastname": "Anjos"
    },{
      "firstname": "Afonso",
      "lastname": "Santos"
    },{
      "firstname": "Tiago",
      "lastname": "Fernandes"
    },{
      "firstname": "Daniel",
      "lastname": "Soares"
    }];

    $scope.getDevsFromApi = function() {
      devs.devs()
      .then(function(response) {
        $scope.devsFromApi = response.data;
      });
    };
  }
}).call();
