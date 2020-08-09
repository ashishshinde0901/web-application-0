
(function () {
'use strict';

angular.module('myFirstapp', [] )

.controller('namecalculatercon', function($scope) {
$scope.name="";
$scope.totalvalue=0;  
$scope.display = function() {
	var totalnvalue = calculate($scope.name);
	$scope.totalvalue = totalnvalue;
};

function calculate(string){
	var totalsvalue = 0
	for (var i = 0; i <string.lenght;  i++) {
		totalsvalue += string.charCodeAt(i);
	}
	return totalsvalue;
}

});


})();

