var test = angular.module("test", ["agp.controllers", "agp.directives", "agp.services"]);

angular.module("agp.controllers", []);
angular.module("agp.directives", []);
angular.module("agp.services", []);

test.constant("constants", {
  "apiDomain": "http://agptest.getsandbox.com",
  "devsEndpoint": "/devs"
});

// To increase angular performance
test.config(["$compileProvider", function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
  // Due to update to angularJS 1.6.8
  $compileProvider.preAssignBindingsEnabled(true);
}]);

test.run(function() {});
