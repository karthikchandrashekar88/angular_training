var app = angular.module('routeApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/addStudent',{
    templateUrl : 'addStudent.htm',
    controller : 'addStudentController'
  }).when('/viewStudents',{
    templateUrl : 'viewStudents.htm',
    controller : 'viewStudentsController'
  }).otherwise({
    redirectTo : '/addStudent'
  });
}]);

app.controller('addStudentController',['$scope','$log',function($scope,logger){
  $scope.message = 'This page will be used to display add student form';
  logger.info('logger info');
  logger.log('logger log');
  logger.error('logger error');
  logger.warn('logger warn');
  logger.debug('logger debug');
}]);

app.controller('viewStudentsController',function($scope,$window,$timeout,$interval){
  $scope.message = 'This page will be used to view student form';
  var x=0;
  $timeout(function(){
    $scope.name = $window.prompt('Enter name: ');
    $window.alert('Hello, '+$scope.name);
  },3000);
  $interval(function(){
    console.log("take a break");
  },500);
});
