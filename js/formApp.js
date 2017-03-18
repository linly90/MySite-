angular.module('angularApp',[])
        .controller('formApp', function ($scope) {

            $scope.message = {}

            $scope.sendMessage = function (message, isvalid) {
                if(isvalid){
                console.log($scope.message)
                    console.log( 'created by ©linly / '+' / firstName: '+ $scope.message.firstName + ' / ' + 'lastName: ' + $scope.message.lastName + ' / ' + 'E-mail: ' + $scope.message.email )
                }
            }

        })

