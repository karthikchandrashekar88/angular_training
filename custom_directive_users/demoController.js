var app = angular.module("directiveApp",[]);

app.controller('directiveCtrl',function($scope){
  $scope.jacob = {
    firstName : 'Jacob',
    lastName : 'Hyde'
  };
  $scope.john = {
    firstName : 'John',
    lastName : 'Denny'
  };
});

app.directive('userinfo',function(){
  var directive = {
    restrict : 'E', //Custom directive for elements
    template : 'User: <b>{{person.firstName}}&nbsp;{{person.lastName}}</b>',
    scope : {
      person : '=u' //To add parameters from the HTML element.
    },
    compile : function(element,attributes){
      return function(cope,element,attributes){
        console.log('cope value :',cope);
        element.css("border","1px solid #cccccc");
      };
    }
  };
  return directive;
});
