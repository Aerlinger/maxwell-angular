angular.module("Maxwell")
    .directive('placingComponent', function ($document) {
      return {
        restrict: 'AE',
        //transclude: true,
        templateUrl: 'app/circuit/placing-component.tmpl.html',
        link: function (scope, element, attrs) {
          element.css({
            position: 'relative',
            cursor: 'pointer'
          });
        }
      };
    });
