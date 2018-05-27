'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Server sent events
const eventsource = () => 'EventSource' in window;

// Device motion API
const devicemotion = () => 'DeviceMotionEvent' in window;
const deviceorientation = () => 'DeviceOrientationEvent' in window;

// File API
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
const filereader = () => !!(window.File && window.FileList && window.FileReader);

// Fullscreen API
// https://developer.mozilla.org/en/API/Fullscreen
const fullscreen = () => !!(document.fullscreenEnabled
                                || document.mozFullScreenEnabled
                                || document.documentElement.webkitRequestFullScreen);

// Connection status
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
const online = () => 'onLine' in navigator;

// Iframes, app mode and such
// https://gist.github.com/bennadel/9759788
const standalone = () => 'standalone' in navigator && navigator.standalone;

// Service workers
const serviceworker = () => 'serviceWorker' in navigator;

// Websockets
const websocket = () => 'WebSocket' in window;

// WebGL rendering
// https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js
const webgl = () => {
  try {
    const canvas = document.createElement('canvas');
    const target = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    return 'WebGLRenderingContext' in window && target
  } catch (x) {
    return false
  }
};

exports.eventsource = eventsource;
exports.devicemotion = devicemotion;
exports.deviceorientation = deviceorientation;
exports.filereader = filereader;
exports.fullscreen = fullscreen;
exports.online = online;
exports.standalone = standalone;
exports.serviceworker = serviceworker;
exports.websocket = websocket;
exports.webgl = webgl;
