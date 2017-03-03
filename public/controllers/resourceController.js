angular.module("resourceController",[]).controller('resourceController', function($scope, $http){
//     console.log("I got the data I requested by cnt");
//     $scope.contactlist=response.data;
// $http.get('/').then(function(response){
// });

 {
      $scope.color = {
        name: 'blue'
      };
      $scope.specialValue = {
        "id": "12345",
        "value": "green"
      };
    };
var refresh = function() {
        $http.get('/Contacts').then(function(response) {
            console.log("I got the data I requested by hfcfhycfh");
            $scope.contact = response.data;
            // $scope.contactlist = "";
            
        });
    };

    refresh();

    $scope.addContact = function() {        
        console.log($scope.value);        
        $http.post('/', $scope.value).then(function(response) {
            refresh();
        });
    };
});