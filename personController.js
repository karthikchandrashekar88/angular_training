app.controller('personCtrl',function($scope){
  // $scope.name = 'Karthik';
  // $scope.address = 'Mysore';
  // $scope.salary = 50000;
  //
  // $scope.annualSalary=function(){
  //   return $scope.salary*12;
  // };

  $scope.person = {
    name : 'Karthik',
    address : 'Mysore',
    salary : 50000,
    annualSalary : function(){
      // return $scope.person.salary*12;
      return this.salary*12;
    }
  }
});
