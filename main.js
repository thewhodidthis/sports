// # Sports
// Helps detect browser features

// Bardcode detection API
export const barcode = () => "BarcodeDetector" in self

// Server sent events
export const eventsource = () => "EventSource" in self

// Device motion API
export const devicemotion = () => "DeviceMotionEvent" in self
export const deviceorientation = () => "DeviceOrientationEvent" in self

// File API
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
export const filereader = () => !!(self.File && self.FileList && self.FileReader)

// Fullscreen API
export const fullscreen = () =>
  !!(document.fullscreenEnabled
    || document.mozFullScreenEnabled
    || document.documentElement.webkitRequestFullScreen)

// Connection status
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine/
export const online = () => "onLine" in navigator

// Popover API
// https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
export const popover = () => HTMLElement.prototype.hasOwnProperty("popover")

// Service workers
export const serviceworker = () => "serviceWorker" in navigator

// Iframes, app mode and such
// https://gist.github.com/bennadel/9759788/
export const standalone = () => "standalone" in navigator && navigator.standalone

// User agent data: `brands`, `mobile`, and `platform`
// https://web.dev/user-agent-client-hints/
export const useragentdata = () => "userAgentData" in navigator

// Websockets
export const websocket = () => "WebSocket" in self

// WebGPU rendering
export const webgpu = () => "gpu" in navigator

// WebGL rendering
// https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js
export const webgl = () => {
  try {
    const canvas = document.createElement("canvas")
    const target = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

    return "WebGLRenderingContext" in self && target
  } catch (_) {
    return false
  }
}
