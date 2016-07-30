app.controller('studnetCtrl',function($scope){
  $scope.student = {
    name : 'Karthik',
    surname : 'C',
    fees : 50000,
    subjects : [
      {name : 'Physics',marks : 2},
      {name : 'Chemistry', marks : 1},
      {name : 'Pervertry', marks : 100}
    ],
    fullName : function(){
      return this.name + " " + this.surname;
    }
  }
});
