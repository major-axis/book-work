var app = angular.module('registerApp', ['ipCookie']);

    app.controller('registerCtrl', ['$scope', '$http', '$window', 'ipCookie',function($scope, $http,$window,ipCookie) {
        $scope.user_name='1';
        $scope.user_password='1';

      $scope.Mysubmit=function(){
        $http({
            method: 'POST',
            url: '/api/account/sign-in/',
            data: {
              'name':$scope.user_name,  //html传给js,json传给数据库
              'password':$scope.user_password,

            }
          }).success(function (data, status, headers, config) {
            if(data['status'] === 'success') {
                alert('登陆成功');
               $window.location = '/my/books/'
            } else if(data['status'] === 'fail') {

                switch(data['data']['code']) {
                    case 2:
                        alert('用户名不存在');
                    case 3:
                        alert('密码错误');
                        break;
                }
            }
        }).error(function(data, status, headers, config) {

        });
      }
    }]);