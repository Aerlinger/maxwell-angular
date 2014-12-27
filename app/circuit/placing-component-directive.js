angular.module("Maxwell")
    .directive('placingComponent', function () {
      return {
        restrict: 'AE',
        templateUrl: 'app/circuit/placing-component.tmpl.html'
      };
    });
