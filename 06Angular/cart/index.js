
angular.module('myApp', []) 
.controller('myController', function ($scope) { 
    $scope.cart = [
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
	//获取索引值
	var getIndex = function(id){
		var index = -1;
		// console.log(index);
		angular.forEach($scope.cart,function(item, key){
			if(item.id ==id){
				index = key;
				return;
			}
			
			// console.log(index);
// 
		});
		return index;
	};
	//删除整行
	$scope.remove=function(id){
		var l = getIndex(id);
		// console.log(l);
		if(l !==-1){$scope.cart.splice(l,1);};
		
	};
	//单项增加一件产品
	$scope.addOne=function(id){
		var l = getIndex(id);
		if(l !==-1){
			++$scope.cart[l].quantity;
		}
	};
	//单项移除一件产品
	$scope.removeOne=function(id){
		var l = getIndex(id);
		if(l !==-1){
			var item= $scope.cart[l];
			
			if (item.quantity>1){
				--item.quantity;
			// console.log(item.quantity);	
			}else{
				var ret = confirm("是否从购物车移除该产品？");
				if(ret){
					$scope.remove(id);
				}
			}	
		}
	};
	//进行监听（防止删除数据后为空）
	$scope.$watch('cart', function(newValue, oldValue) {
		angular.forEach(newValue, function(item, key){
			
				if(item.quantity<1){
					var ret = confirm("是否从购物车移除该产品？");
					if(ret){
						$scope.remove(item.id);
					}else{
						item.quantity=oldValue[key].quantity;
					}
				}
			
			
		});
	}, true);
	//计算总价
	$scope.toTotalPrice=function(){
		var total = 0;
		
		angular.forEach($scope.cart,function(item){
			var num = parseInt(item.quantity);
			total+=num*item.price;
		});
		return total;
	};
	//计算总数量
	$scope.toTotalQuantity=function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			var num = parseInt(item.quantity);
			total+=num;
		});
		return total;
	};
	$scope.orderType = "id";
	$scope.toggleOrderType = function(type){
			console.log($scope.orderType.indexOf('-'));

		if($scope.orderType.indexOf('-')==-1){
			$scope.orderType='-'+type;
		}else{
			$scope.orderType=type;
		}
	}
	//进行排序
	// $scope.order="-";
	// $scope.changeOrder = function(type){
	// 	$scope.orderType = type;
	// 	if($scope.order == ''){
	// 		$scope.order="-";
	// 	}else{
	// 		$scope.order ='';
	// 	}
	// 	//取得当前Dom对象并获取其当前是否有dropup类
	// 	// var i = angular.element($event);
	// 	// angular.element($event).addClass('dropup')

	// 	// console.log(i.hasClass('dropup'));
	// 	// if(i.hasClass('dropup')){
	// 	// 	i.removeClass('dropup');
	// 	// 	console.log(i);
	// 	// }else{
	// 		// i.addClass('dropup');
	// 	// };
	// 	//console.log(i)
	// 	console.log($scope.orderType.indexOf('id'));

	// }

	


}); 