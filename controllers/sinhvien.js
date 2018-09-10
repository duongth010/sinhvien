
var sinhviens=angular.module('sinhvien',[]);

sinhviens.controller('sinhvienController',function ($scope) {
    var sinhvien={
        sid:1,
        name:'Tao Hoai Duong',
        number:'0169 666 0204',
        email:'hoaiduong1012@gmail.com'

    }

    $scope.sinhvienview=sinhvien;
});