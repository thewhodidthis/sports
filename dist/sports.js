(function (exports) {
'use strict';

// Server sent events
var eventsource = 'EventSource' in window;

// Device motion API
var devicemotion = 'DeviceMotionEvent' in window;
var deviceorientation = 'DeviceOrientationEvent' in window;

// File API
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
var filereader = !!(window.File && window.FileList && window.FileReader);

// Fullscreen API
// https://developer.mozilla.org/en/API/Fullscreen
var fullscreen = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen);

// Connection status
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
var online = window.navigator.onLine;

// Iframes, app mode and such
// https://www.bennadel.com/blog/1950-detecting-iphone-s-app-mode-full-screen-mode-for-web-applications.htm
var standalone = 'standalone' in window.navigator && window.navigator.standalone;

exports.eventsource = eventsource;
exports.devicemotion = devicemotion;
exports.deviceorientation = deviceorientation;
exports.filereader = filereader;
exports.fullscreen = fullscreen;
exports.online = online;
exports.standalone = standalone;

}((this.sports = this.sports || {})));
