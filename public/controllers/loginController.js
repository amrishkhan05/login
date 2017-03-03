angular.module("loginController",[]).controller('loginController', ['$scope','$rootScope','$http','$location',function ($scope,$rootScope,$http,$location) {
        $scope.records = {
            userName: "",
            password: ""
        };
  
        $scope.current_users=[];

        $scope.login_user = function (data) {
        	 
            $scope.isShow = true;
            // $scope.name = $scope.records.userName;
            // console.log( $scope.registerlist);
            // if($rootScope.registerlist.firstName==$scope.records.userName)
            // {
            
            // $rootScope.name = $scope.records.userName;
        
            // }

            // else if ($rootScope.registerlist.firstName!=$scope.records.userName) {
            //     $location.path('/invalid')
            // }
            // userFactory.login($scope.records.userName, function(data){
            // $scope.current_users=data;
            // });
            // $scope.$storage=$localStorage.$default({
            //     u_name: $scope.records.userName

            // })
            // console.log($storage.u_name)
         console.log($scope.records); 
         // $http.post('/cilayout',$scope.records);
         //    $scope.records = {
         //        userName: "",
         //        password: ""
         //    }
           
        };
         console.log( $rootScope.name )
$scope.reg=function(){
    $location.path('/register');
    
}


$scope.current_user=[];
  $scope.isShow = true;
  $scope.tabName = "tab1";
  $scope.IsHidden=false;
  $scope.IsHidden2=false;
  $scope.IsHidden3=false;
  $scope.IsHidden4=false;
     $scope.ShowHide=function() {

    $scope.IsHidden=$scope.IsHidden ? false : true;
  }

    $scope.ShowHide2=function() {
    $scope.IsHidden2=$scope.IsHidden2 ? false : true;
  }
    $scope.ShowHide3=function() {

    $scope.IsHidden3=$scope.IsHidden3 ? false : true;
  }
    $scope.ShowHide4=function() {

    $scope.IsHidden4=$scope.IsHidden4 ? false : true;

};

    }]);