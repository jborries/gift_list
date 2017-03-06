app.controller('showController',['$routeParams','$scope','$location','userFactory','listFactory',function($routeParams,$scope,$location,userFactory,listFactory){
  var id = $routeParams.id
  var user={};
  user.id = id;
  userFactory.FindUserByID(user, function(returned_data){
    $scope.userfound = returned_data;
  });
  listFactory.index(function(returned_data){
    $scope.lists = returned_data;
  });
}]);
