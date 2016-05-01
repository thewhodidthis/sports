(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Sports() {
  return {

    // IE11> http://caniuse.com/#feat=webgl
    webgl: (function() {
      try {
        var test = document.createElement('canvas');

        return !!(window.WebGLRenderingContext && (test.getContext('webgl') || test.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    })(),
    cando: 'addEventListener' in document,
    fileread: !!(window.File && window.FileReader && window.FileList && window.Blob),
    fullscreen: !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen),
    standalone: 'standalone' in window.navigator && window.navigator.standalone,
    classlist: (function() {
      return 'classList' in document.documentElement;
    }),
    online: (function() {
      return navigator.onLine;
    }),
    touch: (function() {
      return navigator.userAgent.match(/(iphone|ipad|ipod|android)/gi);
    }),
    scrollsnap: (function() {
      return ('scrollSnapType' in document.documentElement.style) || ('webkitScrollSnapType' in document.documentElement.style);
    }),
    localstorage: (function() {
      return ('localStorage' in window) && window['localStorage'] !== null;
    }),
    isOnline: function() {
      return navigator.onLine;
    },
    isTouchDevice: function() {
      return navigator.userAgent.match(/(iphone|ipad|ipod|android)/gi);
    }
  };
}

module.exports = Sports;

},{}]},{},[1])(1)
});