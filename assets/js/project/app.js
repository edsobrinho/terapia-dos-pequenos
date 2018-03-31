angular.module("psicoterApp", [])
.controller("patientController", function($scope,$http){
    $scope.patient = {};
                
    // function to add user data
    $scope.addPatient = function(){
        
        var data = $.param({
            'data':$scope.patient
        });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        $http.post("api/action.php", data, config).then(function(response){
            if(response.data.status == 'OK'){
                $scope.patientForm.$setPristine();
                $scope.patient = {};
                $scope.messageSuccess(response.data.msg);
            }else{
                $scope.patientForm.$setPristine();
                $scope.patient = {};
                $scope.messageError(response.data.msg);
            }
        });
    };
        
    // function to display success message
    $scope.messageSuccess = function(msg){
        $('.alert-success > p').html(msg);
        $('.alert-success').show();
        $('.alert-success').delay(15000).slideUp(function(){
            $('.alert-success > p').html('');
            $('.alert-success').addClass("none");
        });
    };
    
    // function to display error message
    $scope.messageError = function(msg){
        $('.alert-danger > p').html(msg);
        $('.alert-danger').show();
        $('.alert-danger').delay(15000).slideUp(function(){
            $('.alert-danger > p').html('');
            $('.alert-success').addClass("none");
        });
    };
});