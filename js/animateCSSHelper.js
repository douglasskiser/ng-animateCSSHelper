(function (angular) {
    'use strict';
    angular.module('animateCSSHelper', [])
        .directive('animated', function() {
            return {
                restrict: 'A',
                compile: function($element, $attrs) {
                    $element.addClass('animated');
                    $element.addClass($attrs.animated);
                }
            };
        });
}(angular));