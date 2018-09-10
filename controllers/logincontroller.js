var login = angular.module('login', []);


login.controller('logincontroler', function ($scope) {

    var a='';
    $scope.username;
    $scope.password='';
    $scope.login=function () {



        console.log(typeof $scope.username);


    }


});