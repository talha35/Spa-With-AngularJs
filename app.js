var app = angular.module("myApp", []);
app.controller("myCtrl", ($scope) => {
  $scope.dishes = "";
  $scope.message = "";
  $scope.checked = false;
  $scope.checkLunch = () => {
    if ($scope.dishes.trim().length === 0) {
      $scope.empty = true;
    } else {
      $scope.checked = true;
      $scope.empty = false;
      var arrayDishes = $scope.dishes.split(",");
      var arrayDishesWithoutEmptys = arrayDishes.filter((v) => {
        return v.trim() !== "";
      });

      if (arrayDishesWithoutEmptys.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
});
