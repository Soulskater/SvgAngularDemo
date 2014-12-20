/**
 * Created by gmeszaros on 9/9/2014.
 */
angular.module('SvgDemo')
    .controller("itemCtrl", ['$scope', function ($scope) {

        $scope.width = 250;
        $scope.height = 170;
    }])
    .directive('rectItem', [function () {
        return {
            restrict: "AE",
            replace: true,
            templateUrl: 'src/templates/item.tmpl.html',
            transclude: true,
            scope: {
                data: '=',
                loading: '='
            },
            controller: 'itemCtrl',
            link: function ($scope, element, attrs) {
                $scope.mouseIn = false;
                //
                //It needs for angular, removes svg wrapper
                var e = angular.element(element.children());
                element.replaceWith(e);
            }
        };
    }])
    .directive('itemTitle', [function () {
        return {
            restrict: "E",
            replace: true,
            template: '<div class="font-s box-header" ng-transclude></div>',
            transclude: true,
            link: function ($scope, element, attrs) {
            }
        };
    }])
    .directive('itemDescription', [function () {
        return {
            restrict: "AE",
            replace: true,
            template: '<div class="font-xs" ng-transclude></div>',
            transclude: true,
            link: function ($scope, element, attrs, ctrl) {
            }
        };
    }])