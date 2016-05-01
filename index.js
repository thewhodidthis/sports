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
