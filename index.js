function Supports() {
  'use strict';

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
    fileread: !!(window.File && window.FileReader && window.FileList && window.Blob),
    fullscreen: !!(document.fullscreenEnabled ||
                   document.mozFullScreenEnabled ||
                   document.documentElement.webkitRequestFullScreen),
    standalone: 'standalone' in window.navigator && window.navigator.standalone,
    classlist: 'classList' in document.documentElement,
    cando: 'addEventListener' in document
  };
}

module.exports = Supports;
