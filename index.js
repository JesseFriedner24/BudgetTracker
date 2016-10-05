myApp = angular.module('myApp', []);
//Controller
myApp.controller('trackCtrl', ['$scope', function($scope) {
    $scope.incItems = [];
    $scope.expItems = [];
    $scope.output1 = 0;
    $scope.output2 = 0;
    //Income Button
    $scope.add = function() {
            $scope.incItems.push({
                'incInfo': $scope.incDesc,
                'incAmount': $scope.incAmount
            });
            //Adding Income Amount
            $scope.output1 += parseInt($scope.incAmount);
        }
        //Expense Button   
    $scope.exp = function() {
        $scope.expItems.push({
            'expInfo': $scope.expDesc,
            'expAmount': $scope.expAmount
        });
        //Adding Expense Amount 
        $scope.output2 += parseInt($scope.expAmount);
        //Amount Left After Spending
        $scope.total = $scope.output1 - $scope.output2;
    }
}]);
