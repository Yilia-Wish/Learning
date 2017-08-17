
var myApp = angular.module('myApp', []);

myApp.provider('MyProvider', function() {  
    // default name is 'anonymous';  
    var defaultName = 'anonymous';  
    var name = defaultName;  
    // setName can be called duaring module init  
    this.setName = function(newName) {  
        name = newName;  
    }  
      
    this.$get = function() {  
        var result = {};  
        result.greeting = 'Hello from provider';  
  
        result.name = name;  
        result.defaultName = defaultName;  
        return result;  
    }  
});
myApp.config(function(MyProviderProvider) {  
    MyProviderProvider.setName('Angularjs Provider');  
});  
myApp.controller('myController', ['$scope', 'MyProvider', function($scope, myProvider) {  
     
    $scope.greetingFromProvider = myProvider.greeting;  
      
    $scope.defaultName = myProvider.defaultName;  
    $scope.name = myProvider.name  
}]);  

// myApp.factory('Myfactory', [function () {
	

// 	return "jajaj";
// }]);
// myApp.service('Mys', [function () {
// 	return{
// 		a:"kkk"
// 	};
// }])
//  var myController= myApp.controller('myController', function (myService,Myfactory,Mys,$scope) { 
//     $scope.name = "abc";
//  	console.log(myService);
//  	console.log(Myfactory);
//  	console.log(Mys);
// }); 

