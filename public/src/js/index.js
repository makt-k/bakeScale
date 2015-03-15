var angular = require('angular');
var firebase = require('firebase');
var angularFire = require('angularFire');

var app = angular.module('bakeScale', ['firebase', require('angular-route')]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: '../templates/home.html',
            controller: 'homeController'
        }).
        when('/new', {
            templateUrl: '../templates/createRecipe.html',
            controller: 'recipeController'
        }).
        when('/masterlist', {
          templateUrl: '../templates/masterlist.html',
          controller: 'masterlistController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

app.controller('recipeController', ["$scope", "$firebaseArray", function($scope, $firebaseArray, $routeParams) {
  var recipes = new Firebase('https://scorching-inferno-5860.firebaseio.com');
  $scope.allRecipes = $firebaseArray(recipes);

  $scope.recipe = {};

  $scope.recipe.ingredients = [{id: 'ingredient1'}, {id: 'ingredient2'}, {id: 'ingredient3'}, {id: 'ingredient4'}, {id: 'ingredient5'}];

  $scope.addNewIngredient = function() {
      var newItemNo = $scope.recipe.ingredients.length+1;
      $scope.recipe.ingredients.push({'id':'ingredient'+newItemNo});
  };
  $scope.showAddIngredient = function(ingredient) {
   return ingredient.id === $scope.recipe.ingridents[0].id;
  };

  $scope.addRecipe = function(recipe){
    $scope.allRecipes.$add(recipe);
  }

}]);

app.controller('masterlistController', ["$scope", "$firebaseArray", function($scope, $firebaseArray, $routeParams){
  var recipes = new Firebase('https://scorching-inferno-5860.firebaseio.com');
  $scope.recipes = $firebaseArray(recipes);

}]);


