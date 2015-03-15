// var angular = require('angular');
// var firebase = require('firebase');
// var angularFire = require('angularFire');
// var BSapp = angular.module('bakeScale', ['firebase', require('angular-route')]);

// BSapp.controller('recipeController', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
//   var ref = new Firebase('https://scorching-inferno-5860.firebaseio.com');

//   $scope.allReceipes = $firebaseArray(ref);

//   $scope.recipe = {};

//   $scope.recipe.ingredients = [{id: 'ingredient1'}, {id: 'ingredient2'}, {id: 'ingredient3'}, {id: 'ingredient4'}, {id: 'ingredient5'}];

//   $scope.addNewIngredient = function() {
//       var newItemNo = $scope.recipe.ingredients.length+1;
//       $scope.recipe.ingredients.push({'id':'ingredient'+newItemNo});
//       console.log($scope.recipe)
//   };
//   $scope.showAddIngredient = function(ingredient) {
//    return ingredient.id === $scope.recipe.ingridents[0].id;
//   };

//   $scope.addRecipe = function(){
//     $scope.allReceipes.$add(recipe);
//   }

// }]);

