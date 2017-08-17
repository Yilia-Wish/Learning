
angular.module('myApp', []) 
.directive('likeMe', [function () {
	return {
		restrict: 'E',
		templateUrl:'1.html',
		replace:true
	};
}])
.controller('myController', function ($scope) { 
   

}); 