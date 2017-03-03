(function(){
  var app = angular.module('cards',[]);
 
  app.controller('CardController', function($scope, $http){

    $scope.query = {}

    $scope.search = function(){
      $http.get('api/getStories?jql=' + encodeURI($scope.query.jqlQuery)).
        success(function(data, status, headers, config){

          var json = JSON.parse(data);
          $scope.stories = json.issues;

          // js script to output labels array
          
          // $scope.label = $scope.stories.fields.labels;
      
          // var labelList = $scope.label;
          // var index;
          // var storeLabel;
          // for (index = 0; index < labelList.lenght; index++){
              
          //     return labelList[index];
          //     storeLabel = labelList[index];
          //   }
            
          //   $scope.label= storeLabel;
        }).

        error(function(data, status, headers, config){
          //log error
          console.log('error');
        });
    };
  });
// add filter to format label array
 app.filter('jsonToList', function() {
    return function(data) {
      return data.join(', ');
    };
  });



})();
