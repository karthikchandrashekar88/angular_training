app.controller('studnetCtrl',function($scope,$http){
  $scope.master={
    name:'Karthik',
    surname:'C'
  };

  $scope.btnColor = 'blue';

  $scope.reset = function(){
    $scope.user = angular.copy($scope.master);
    //$scope.user = $scope.master;  //if we directly give user=master,
                                    //it will be assigning the address of master to user.
    $scope.btnColor = 'blue';
  };

  $scope.changeColor = function(){
    $scope.btnColor = 'red';
  };

  $scope.getDetails = function(){
    var url = '/new';
    $http.get(url).success(function(response){
      console.log('response is :',response);
    }).error(function(err){
      console.log("error in http get is",err);
    });
  }
});
