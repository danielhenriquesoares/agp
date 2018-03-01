var test = angular.module("test", ["agp.controllers", "agp.directives"]);

angular.module("agp.controllers", []);
angular.module("agp.directives", []);

// To increase angular performance
test.config(["$compileProvider", function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
  // Due to update to angularJS 1.6.8
  $compileProvider.preAssignBindingsEnabled(true);
}]);

test.run(function() {

});
