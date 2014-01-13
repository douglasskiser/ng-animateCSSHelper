# Angular AnimateCSS Helper Directive

This project is an AngularJS directive to assist in developing with animate.css .

## How to use it

Inject the animateCSSHelper directive into your angular module.

    var app = angular.module('app', ['animateCSSHelper']);

Then just add an animated attribute with desired animation name in your html markup. This will add the
appropriate classes to the element.

    <div animated="bounceInUp"></div>
