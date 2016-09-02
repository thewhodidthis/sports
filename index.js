function Sports() {
  'use strict';

  return {
    cando: 'addEventListener' in document,
    classlist: 'classList' in document.documentElement,
    fileread: !!(window.File && window.FileReader && window.FileList && window.Blob),
    fullscreen: !!(document.fullscreenEnabled ||
                   document.mozFullScreenEnabled ||
                   document.documentElement.webkitRequestFullScreen),
    localstorage: 'localStorage' in window && window.localStorage !== null,
    online: navigator.onLine,
    scrollsnap: ('scrollSnapType' in document.documentElement.style) ||
                ('webkitScrollSnapType' in document.documentElement.style),
    standalone: 'standalone' in window.navigator && window.navigator.standalone,
    touch: !!(navigator.userAgent.match(/(iphone|ipad|ipod|android)/gi)),
    webgl: (function () {
      try {
        var test = document.createElement('canvas');

        return !!(window.WebGLRenderingContext && (test.getContext('webgl') || test.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    })(),
  };
}

module.exports = Sports;
