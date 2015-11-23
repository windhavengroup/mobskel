angular.module('app.controllers', [])
     
.controller('pictureCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.go = function ( path ) {
	$location.path( path );
    };
}])
.controller('signupCtrl', function($scope) {

})
.controller('menuCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.go = function ( path ) {
	$location.path( path );
    };
}])
.controller('loginCtrl', function($scope) {

})
      
.controller('cardCtrl', function($scope) {

})
   
.controller('listCtrl', function($scope) {

})
   
.controller('textCtrl', function($scope) {

})

 
