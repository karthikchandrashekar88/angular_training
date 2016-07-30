var app = angular.module('productApp',[]);
app.controller('productCtrl',['$scope','$http',function($scope,$http,$window){
  $scope.productType = 'Software';
  // var config = {
  //   headers : {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // };

  $scope.getProducts = function(){
    $http.get('/products').then(function(res){
      console.log("respose from /products",res);
      $scope.existingProducts = res.data;
      console.log("first",$scope.existingProducts[0].id);
      $scope.selectedId = $scope.existingProducts[3];
    });
  };
  $scope.update=function(selectedProduct){
    console.log("selectedProduct",selectedProduct);
  }
  $scope.getProducts();
  $scope.addProduct = function(){
    var data = {
      id : $scope.productId,
      name : $scope.productName,
      category : $scope.productType,
      price : $scope.price
    };

    console.log("data",data);
    $http.post('/addProduct',data)
    .success(function (data, status, headers, config) {
      console.log("data",data);
      $scope.getProducts();
      $scope.productId='';
      $scope.productName='';
      $scope.productType = 'Software';
      $scope.price = '';
    })
    .error(function (data, status, header, config) {
      console.log("data",data);
    });
  };
}]);
