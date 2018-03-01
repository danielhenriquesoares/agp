(function() {
  "use strict";

  angular.module("agp.directives")
  .directive("dev",[Dev]);

  function Dev() {
    return {
      restrict: "E",
      scope: {
        dev: "="
      },
      controller: function() {

      },
      bindToController: true,
      controllerAs: "$ctrl",
      /*template: '<div>'+
        '<div class="avatar">'+
        '</div>'+
        '<div class="dev">'+
          '<p><span class="bold">First name:</span> {{$ctrl.dev.firstname}}</p>'+
          '<p><span class="bold">Last name:</span> {{$ctrl.dev.lastname}}</p>'+
        '</div>' +
      '</div>',*/
      templateUrl: "../views/agp_view.html",
      link: function(scope, element, attrs) {
        console.log(scope.$ctrl);
      }
    };
  }
}).call();
