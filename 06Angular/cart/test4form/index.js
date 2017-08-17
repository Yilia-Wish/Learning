
angular.module('myApp', []) 
.filter("cityFilter",function() {
	return function(data,parent){
		var datas = [];
		angular.forEach(data, function(obj){
			if (obj.parent==parent) {
				datas.push(obj);
			}
		});
		return datas;
	};
})
.controller('myController', function ($scope) { 
	$scope.data = {
		selectedHobby : [0,1],
		are:8,
		
	 	};
	 $scope.like = {
	 	hobbies:[
	 		{
	 			id:0,
	 			name:"吃饭2"	,
	 			selected:false		
	 		},
	 		{
	 			id:1,
	 			name:"睡觉2",
	 			selected:false
	 		},
	 		{
	 			id:2,
	 			name:"打豆豆2",
	 			selected:false
	 		},
	 		{
	 			id:3,
	 			name:"写代码2",
	 			selected:false
	 		}
	 		]
	 	};
	$scope.hobbies = [
		{
			id:0,
			name:"吃饭"			
		},
		{
			id:1,
			name:"睡觉"
		},
		{
			id:2,
			name:"打豆豆"
		},
		{
			id:3,
			name:"写代码"
		}
		
	];  
	$scope.cities=[
		{
			id:11,
			name:"北京",
			parent:0,

		},
		{
			id:1,
			name:"上海",
			parent:0,

		},
		{
			id:2,
			name:"天津",
			parent:0,

		},
		{
			id:3,
			name:"北京市",
			parent:11,

		},
		{
			id:4,
			name:"上海市",
			parent:1,

		},
		{
			id:5,
			name:"天津市",
			parent:2,

		},
		{
			id:6,
			name:"朝阳区",
			parent:3,

		},
		{
			id:7,
			name:"王府井",
			parent:3,

		},
		{
			id:8,
			name:"浦东新区",
			parent:4,

		},
		{
			id:9,
			name:"长宁区",
			parent:4,

		},
		{
			id:10,
			name:"天津卫",
			parent:5,

		}
		]
	
	// this.findObj=function(id){
	// 	var o ;
	// 	angular.forEach($scope.cities, function(obj){
	// 		if (obj.id===id) {
	// 			o=obj;
	// 			return;
	// 		}
	// 	})
	// 	return o;
	// }
	$scope.findParent =function (parent) {
		// body...
		var parentObj;
		angular.forEach($scope.cities,function(obj){
			if (obj.id===parent) {
				parentObj =obj.parent;
				return;
			}
			
		})
		return parentObj;
	};
	if ($scope.data.are!==undefined) {
		$scope.data.cit = $scope.findParent($scope.data.are);
		$scope.data.province = $scope.findParent($scope.data.cit);

	};
	$scope.toggleHobby=function(id){
		var index =-1;
		if ($scope.data.selectedHobby===undefined) {
			$scope.data.selectedHobby=[];
		}else{
			index = $scope.data.selectedHobby.indexOf(id);
		}
		
		if(index==-1){
			$scope.data.selectedHobby.push(id);
		}else{
			$scope.data.selectedHobby.splice(index,1);
		}
		// console.log($scope.data.selectedHobby);
	};
	$scope.flag = true; 
	$scope.$watch('like.hobbies', function(newValue, oldValue, $scope) {
		if(newValue !== oldValue){
                    $scope.flag = false;
                    // console.log($scope.flag);
                }
	}, true);

	 $scope.orgData = angular.copy($scope.data);
	 $scope.reset = function(){
	 	$scope.data = angular.copy($scope.orgData);
	 	$scope.myForm.$setPristine();
	 }
	 	// $scope.test=function(){
	 	// 	console.log($scope.data);
	 	// }

}); 