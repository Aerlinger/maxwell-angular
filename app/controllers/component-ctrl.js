app.controller('ComponentCtrl', function ($scope) {
  $scope.selectedComponents = [];
  $scope.dragComponents = [];
  $scope.isEditing = false;
  $scope.isCreating = false;

  function isEditing() {
    return $scope.selectedComponents.length > 0;
  }

  function setSelected(components) {
    $scope.unselect();

    for (var component in components) {
      $scope.selectedComponent = component;
    }
  }

  function unselect() {
    $scope.selectedComponents = [];
  }

  function isDragging() {
    return $scope.dragComponents.length > 0;
  }

  function stopDragging() {
    $scope.dragComponents = [];
  }

  $scope.setSelected = setSelected;
  $scope.unselect = unselect;
  $scope.isDragging = isDragging;
  $scope.isEditing = isEditing;
  $scope.stopDragging = stopDragging;
});
