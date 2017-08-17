
angular.module('myApp', []) 
.directive('likeMe', [function () {
	return {
		restrict: 'A',
		template:'<div ng-repeat="user in users" ng-click="changename(user)">{{user.name}}</div>',
		replace:false,
		// compile:function(ele,attr,transclude){
		// 	ele.append(angular.element('<div>{{user.cont}}</div>'));

		// 	return{
		// 		pre:function($scope,ele,attr,controller){
		// 			var i = 0;
		// 			ele.on('click', function() {
		// 				$scope.$apply(function(){
		// 					$scope.user.name='after';
		// 					$scope.user.cont = ++i;
		// 				});
		// 			});
					
		// 		},
		// 		post:function($scope,ele,attr,controller){
		// 		}
		// 	}
		// },
		// link:function($scope,ele,attr,controller){
		// 			ele.append(angular.element('<div>{{user.name}}</div>'));
		// 			ele.on('click', function() {
		// 				var i = 0;
		// 				$scope.$apply(function(){
		// 					$scope.user.name='after';
		// 					$scope.user.id = ++i;
		// 				});
		// 			});
					
		// 		}
		controller:function($scope){
			console.log($scope);
			// $scope.users=$scope.a();
			$scope.users=$scope.b;
			$scope.changename =function(user){
				
					user.name = "me";
				
			}
		},
		scope:{b:'=nowIt'}
	};
}])
.controller('myController', function ($scope) { 
	$scope.users = [
		{
			id:0,
			name:"iphone",
			quantity:3,
			price:6000
		},
		{
			id:1,
			name:"iphone4",
			quantity:5,
			price:6300
		},
		{
			id:2,
			name:"ipad",
			quantity:3,
			price:7500
		},
		{
			id:8,
			name:"iphone6s",
			quantity:3,
			price:6230
		},
		{
			id:4,
			name:"imac",
			quantity:3,
			price:60000
		},
		{
			id:5,
			name:"ipod",
			quantity:3,
			price:600
		},
		
	];   

}); 