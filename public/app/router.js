app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'views/cilayout.html',
			

			
 		})
		.when('/mainpage',{
			templateUrl : 'views/mainpage.html',
			
		})
		.when('/register',{
			templateUrl : 'views/register.html',
			
		})
		.when('/invalid',{
			templateUrl : 'views/invalid.html',
			
		})
		.otherwise({
			redirectTo : '/'
			
		})
}]);


