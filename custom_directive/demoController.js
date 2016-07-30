var app = angular.module("directiveApp",[]);

app.controller('directiveCtrl',function($scope){
  $scope.text = 'This is the text with $scope scope.';
});

app.directive('mytag',function(){
  var directive = {
    restrict : 'E', //Custom directive for elements
    template : 'My first directive element : {{text}}'
  };
  return directive;
});

app.directive('myattr',function(){
  var directive = {
    restrict : 'A',   //Custom directive for attributes
    template : 'My first custom attribute'
  };
  return directive;
});
