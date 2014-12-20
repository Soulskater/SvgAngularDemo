/**
 * Created by MCG on 2014.12.20..
 */
angular.module('SvgDemo', ['Svg.Directive'])
    .controller("siteCtrl", ['$scope', function ($scope) {

        $scope.rectangles = [
            {
                position: {x: 50, y: 100},
                loading: false,
                title: "SVG rect 1"
            },
            {
                position: {x: 400, y: 100},
                loading: true,
                title: "SVG rect 2"
            }
        ];
    }])