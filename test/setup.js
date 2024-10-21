// setup.js
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

copyProps(window, global);

// Simulamos localStorage
global.localStorage = {
  getItem: function (key) {
    return this[key] || null;
  },
  setItem: function (key, value) {
    this[key] = value;
  },
  removeItem: function (key) {
    delete this[key];
  },
  clear: function () {
    Object.keys(this).forEach(key => delete this[key]);
  }
};
