app.factory('listFactory',['$http',function($http){
  function listFactory(){
    var _this = this;
    this.addList = function(list, callback){
      $http.post('/list',list).then(function(returned_data){
        console.log("after add http request",returned_data.data);
        callback(returned_data.data);
      })
    }
        
    this.index = function(callback){
      $http.get('/lists').then(function(returned_data){
        lists = returned_data.data;
        callback(lists);
      });
    };
    this.checkItem = function(list){
      $http.get(`/list/check/${list._id}`).then(function(returned_data){
        console.log(returned_data)
      })
    }
    this.uncheckItem = function(list){
      $http.get(`/list/uncheck/${list._id}`).then(function(returned_data){
        console.log(returned_data)
      })
    }
  }
  return new listFactory();
}])
