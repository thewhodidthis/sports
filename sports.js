var sports = (function(exports) {
  "use strict"

  // # Sports
  // Helps detect browser features

  // Bardcode detection API
  const barcode = () => "BarcodeDetector" in self

  // Server sent events
  const eventsource = () => "EventSource" in self

  // Device motion API
  const devicemotion = () => "DeviceMotionEvent" in self
  const deviceorientation = () => "DeviceOrientationEvent" in self

  // File API
  // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
  const filereader = () => !!(self.File && self.FileList && self.FileReader)

  // Fullscreen API
  const fullscreen = () =>
    !!(document.fullscreenEnabled
      || document.mozFullScreenEnabled
      || document.documentElement.webkitRequestFullScreen)

  // Connection status
  // https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine/
  const online = () => "onLine" in navigator

  // Popover API
  // https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
  const popover = () => HTMLElement.prototype.hasOwnProperty("popover")

  // Service workers
  const serviceworker = () => "serviceWorker" in navigator

  // Iframes, app mode and such
  // https://gist.github.com/bennadel/9759788/
  const standalone = () => "standalone" in navigator && navigator.standalone

  // User agent data: `brands`, `mobile`, and `platform`
  // https://web.dev/user-agent-client-hints/
  const useragentdata = () => "userAgentData" in navigator

  // Websockets
  const websocket = () => "WebSocket" in self

  // WebGPU rendering
  const webgpu = () => "gpu" in navigator

  // WebGL rendering
  // https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js
  const webgl = () => {
    try {
      const canvas = document.createElement("canvas")
      const target = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

      return "WebGLRenderingContext" in self && target
    } catch (_) {
      return false
    }
  }

  exports.barcode = barcode
  exports.devicemotion = devicemotion
  exports.deviceorientation = deviceorientation
  exports.eventsource = eventsource
  exports.filereader = filereader
  exports.fullscreen = fullscreen
  exports.online = online
  exports.popover = popover
  exports.serviceworker = serviceworker
  exports.standalone = standalone
  exports.useragentdata = useragentdata
  exports.webgl = webgl
  exports.webgpu = webgpu
  exports.websocket = websocket

  return exports
})({})
