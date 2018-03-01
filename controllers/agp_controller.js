(function() {
  "use strict";

  angular.module("agp.controllers")
  .controller("Agp", ["$scope", Agp]);

  function Agp($scope) {
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
  }
}).call();
