// Server sent events
export const eventsource = () => 'EventSource' in window

// Device motion API
export const devicemotion = () => 'DeviceMotionEvent' in window
export const deviceorientation = () => 'DeviceOrientationEvent' in window

// File API
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
export const filereader = () => !!(window.File && window.FileList && window.FileReader)

// Fullscreen API
// https://developer.mozilla.org/en/API/Fullscreen
export const fullscreen = () => !!(document.fullscreenEnabled
                                || document.mozFullScreenEnabled
                                || document.documentElement.webkitRequestFullScreen)

// Connection status
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
export const online = () => 'onLine' in navigator

// Iframes, app mode and such
// https://gist.github.com/bennadel/9759788
export const standalone = () => 'standalone' in navigator && navigator.standalone

// Service workers
export const serviceworker = () => 'serviceWorker' in navigator

// Websockets
export const websocket = () => 'WebSocket' in window

// WebGL rendering
// https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js
export const webgl = () => {
  try {
    const canvas = document.createElement('canvas')
    const target = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

    return 'WebGLRenderingContext' in window && target
  } catch (x) {
    return false
  }
}
