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
