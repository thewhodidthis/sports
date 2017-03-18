const win = window;
const doc = document;
const html = doc.documentElement;

export const online = win.navigator.onLine;
export const classlist = 'classList' in html;
export const websocket = 'WebSocket' in win;
export const standalone = 'standalone' in win.navigator && win.navigator.standalone;
export const eventsource = 'EventSource' in win;

// https://www.chromestatus.com/feature/5721832506261504
export const scrollsnap = 'scrollSnapType' in html.style || 'webkitScrollSnapType' in html.style;

// Looks like a mobile device (side-effects)
export const touch = !!(win.navigator.userAgent.match(/(iphone|ipad|ipod|android)/gi));

// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js
export const fileread = !!(win.File && win.FileList && win.FileReader);
export const fullscreen = !!(doc.fullscreenEnabled || doc.mozFullScreenEnabled || html.webkitRequestFullScreen);

// Side-effects, no tree shaking
export const webgl = (() => {
  try {
    const c = doc.createElement('canvas');

    return win.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'));
  } catch (e) {
    return false;
  }
})();

export const localstorage = (() => {
  try {
    return 'localStorage' in win && win.localStorage !== null;
  } catch (e) {
    return false;
  }
})();

