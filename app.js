
(function () {
'use strict';

angular.module('myFirstapp', [] )

.controller('namecalculatercon', function($scope) {
$scope.name="";
$scope.totalvalue=0;  
$scope.display = function($scope.totalvalue) {
	var totalsvalue = 0
	for (var i = 0; i <string.lenght;  i++) {
		var totalsvalue = 0
		totalsvalue += string.charCodeAt(i);
	}
	$scope.totalvalue = totalsvalue;
};




});


})();

