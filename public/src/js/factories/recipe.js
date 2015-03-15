// var angular = require('angular');
// var firebase = require('firebase');
// var angularFire = require('angularFire');
// var app = require('../index');

// app.factory("Recipe", ["$firebaseObject",
//   function($firebaseObject) {
//     return function(recipeName) {
//       // create a reference to the Firebase where we will store our data
//       var randomRoomId = Math.round(Math.random() * 100000000);
//       var ref = new Firebase("https://scorching-inferno-5860.firebaseio.com" + randomRoomId);
//       var recipeRef = ref.child(recipeName);

//       // return it as a synchronized object
//       return $firebaseObject(recipeRef);
//     }
//   }
// ]);
