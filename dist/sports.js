(function (exports) {
  'use strict';

  var win = window;
  var doc = document;
  var html = document.documentElement;

  var online = win.navigator.onLine;
  var classlist = 'classList' in html;
  var websocket = 'WebSocket' in win;
  var standalone = 'standalone' in win.navigator && win.navigator.standalone;
  var eventsource = 'EventSource' in win;

  // https://www.chromestatus.com/feature/5721832506261504
  var scrollsnap = 'scrollSnapType' in html.style || 'webkitScrollSnapType' in html.style;

  // Looks like a mobile device (side-effects)
  var touch = !!win.navigator.userAgent.match(/(iphone|ipad|ipod|android)/gi);
  var fileread = !!(win.File && win.FileReader && win.FileList && win.Blob);
  var fullscreen = !!(doc.fullscreenEnabled || doc.mozFullScreenEnabled || html.webkitRequestFullScreen);

  // Side-effects, no tree shaking
  var webgl = function () {
    try {
      var c = document.createElement('canvas');

      return win.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  }();

  var localstorage = function () {
    try {
      return 'localStorage' in win && win.localStorage !== null;
    } catch (e) {
      return false;
    }
  }();

  exports.online = online;
  exports.classlist = classlist;
  exports.websocket = websocket;
  exports.standalone = standalone;
  exports.eventsource = eventsource;
  exports.scrollsnap = scrollsnap;
  exports.touch = touch;
  exports.fileread = fileread;
  exports.fullscreen = fullscreen;
  exports.webgl = webgl;
  exports.localstorage = localstorage;

}((this.sports = this.sports || {})));
//# sourceMappingURL=sports.js.map
