
angular.module('myApp', []) 
.factory('Data', [function () {
	

	return [
		{
			title:'标题1',
			name:"内容详情：这是一段内容",
		},
		{
			title:'标题2',
			name:"内容详情：这是一段内容",
		},
		{
			title:'标题3',
			name:"内容详情：这是一段内容",
		}
		
		
	];
}])
.controller('myController',['$scope','Data', function ($scope,Data) { 
    $scope.data=Data;
	
}])
.directive('collapseGroup', [function () {
	return {
		restrict: 'E',
		template:'<div class="panel-group" ng-transclude></div>',
		replace:true,
		transclude:true,
		controller:function(){
			this.group = [];
			this.closeOthers = function(now){
				angular.forEach(this.group,function(scope){
					if(scope!== now){
						scope.isOpen = false;
					}
				})
			}
		},
		controllerAs:'groupController',
		
	};
}])
.directive('collapseComponent', [function () {
	return {
		restrict: 'E',
		templateUrl:'template.html',
		replace:true,
		scope:{
			heading:'@'
		},
		transclude:true,
		require:'^collapseGroup',
		
		link: function (scope, iElement, iAttrs,groupController) {
			scope.isOpen=false;
			scope.changeOpen = function(){
				scope.isOpen = !scope.isOpen;
				groupController.closeOthers(scope);
			};
			groupController.group.push(scope);
		}
	};
}])
