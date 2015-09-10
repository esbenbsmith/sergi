var app = angular.module('sergi', [
		
	]);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.test = 'Hello world!'
}]);

app.controller('SignupCtrl', ['$scope', 'User', '$state', function ($scope, User, $state){
	
	$scope.newUser={};

	$scope.createUser = function () {
		User.register($scope.newUser).then(function(user){
			$state.go('app.profile');

		}, function(err){
			$scope.error = err;
		})
	}

}])