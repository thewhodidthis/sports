(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Sports() {
  'use strict';

  return {

    // IE 9 upwards
    cando: 'addEventListener' in document,

    // IE 11 upwards
    classlist: 'classList' in document.documentElement,

    // Supports file api
    // TODO: Break apart since recent versions of IE partly support most of these
    fileread: !!(window.File && window.FileReader && window.FileList && window.Blob),

    // Supports fullscreen api
    fullscreen: !!(document.fullscreenEnabled ||
                   document.mozFullScreenEnabled ||
                   document.documentElement.webkitRequestFullScreen),

    // Supports local storage
    localstorage: 'localStorage' in window && window.localStorage !== null,

    // Is connection avaiable
    online: window.navigator.onLine,

    // https://www.chromestatus.com/feature/5721832506261504
    scrollsnap: ('scrollSnapType' in document.documentElement.style) ||
                ('webkitScrollSnapType' in document.documentElement.style),

    // When using home screen launcher
    standalone: 'standalone' in window.navigator && window.navigator.standalone,

    // Is touch device
    touch: !!(window.navigator.userAgent.match(/(iphone|ipad|ipod|android)/gi)),

    // Is webgl available
    webgl: (function () {
      try {
        var test = document.createElement('canvas');
        return !!(window.WebGLRenderingContext &&
                 (test.getContext('webgl') || test.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    })(),
  };
}

module.exports = Sports;

},{}]},{},[1])(1)
});