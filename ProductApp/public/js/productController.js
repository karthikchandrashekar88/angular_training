var app = angular.module('productApp',[]);
app.controller('productCtrl',['$scope','$http','$window',function($scope,$http,$window){
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
      $scope.selectedProduct = $scope.existingProducts[0];
    });
  };

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

  $scope.update=function(selectedProduct){
    console.log("selectedProduct",selectedProduct);
  }

  $scope.deleteProduct=function(){
    var product_details = 'PRODUCT DETAILS'+
      '\nproduct id: '+$scope.selectedProduct.id+
      '\nproduct name: '+$scope.selectedProduct.name+
      '\ncategory: '+$scope.selectedProduct.category+
      '\nprice: '+$scope.selectedProduct.price+ '\n';
    var choice = $window.prompt(product_details+'\nAre you sure you want to delete this product?(Y/N)');
    console.log("selected choice is",choice);
    if(choice==='y'||choice==='Y'){
      var data = $scope.selectedProduct.id;
      $http.delete('/deleteProduct?id='+data)
      .then(function(res){
        console.log("res",res);
        if(res.data==='DELETED'){
          $scope.getProducts();
        }
      })
    }
  };
}]);
