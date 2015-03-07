var angular = require('angular');

var app = angular.module('bakeScale', [require('angular-route')]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: '../templates/home.html',
            controller: 'homeController'
        }).
        when('/new', {
            templateUrl: '../templates/createReceipe.html',
            controller: 'receipeController'
        }).
        when('/masterlist', {
          templateUrl: '../templates/masterlist.html',
          controller: 'masterlistController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

app.controller('receipeController', function($scope, $routeParams) {
  $scope.receipe = {};

  $scope.receipe.ingredients = [{id: 'ingredient1'}, {id: 'ingredient2'}, {id: 'ingredient3'}, {id: 'ingredient4'}, {id: 'ingredient5'}];

  $scope.addNewIngredient = function() {
      var newItemNo = $scope.receipe.ingredients.length+1;
      $scope.receipe.ingredients.push({'id':'ingredient'+newItemNo});
      console.log($scope.receipe)
  };
  $scope.showAddIngredient = function(ingredient) {
   return ingredient.id === $scope.receipe.ingridents[0].id;
  };

});

app.controller('masterlistController', function($scope, $routeParams) {


});

app.controller('homeController', function($scope, $routeParams){

})
