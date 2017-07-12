// Server sent events
export const eventsource = 'EventSource' in window

// Device motion API
export const devicemotion = 'DeviceMotionEvent' in window
export const deviceorientation = 'DeviceOrientationEvent' in window

// File API
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
export const filereader = !!(window.File && window.FileList && window.FileReader)

// Fullscreen API
// https://developer.mozilla.org/en/API/Fullscreen
export const fullscreen = !!(document.fullscreenEnabled
                          || document.mozFullScreenEnabled
                          || document.documentElement.webkitRequestFullScreen)

// Connection status
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
export const online = window.navigator.onLine

// Iframes, app mode and such
// https://www.bennadel.com/blog/1950-detecting-iphone-s-app-mode-full-screen-mode-for-web-applications.htm
export const standalone = 'standalone' in window.navigator && window.navigator.standalone
