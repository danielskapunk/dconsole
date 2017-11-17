'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * console wrapper with line numbers
 * forked from: amelierosser/console.js
 * Usage:
 * import * as c from 'console'
 * c.log('abc');
 *
 * Ref: https://matthewspencer.github.io/console-log/
 */

/*eslint-disable */
var slice = [].slice;
var enabled = window.location.hostname.indexOf('localhost') !== -1;

var log = exports.log = function log() {
	if (!window.console || !console.log) {
		return function () {};
	}
	if (!enabled) return function () {};
	return Function.prototype.bind.call(console.log, console);
}();

var clear = exports.clear = function clear() {
	if (!window.console || !console.clear) {
		return function () {};
	}
	if (!enabled) return function () {};
	return Function.prototype.bind.call(console.clear, console);
}();

var debug = exports.debug = function debug() {
	if (!window.console || !console.debug) {
		return function () {};
	}
	if (!enabled) return function () {};
	return Function.prototype.bind.call(console.debug, console);
}();

var info = exports.info = function info() {
	if (!window.console || !console.info) {
		return function () {};
	}
	if (!enabled) return function () {};
	return Function.prototype.bind.call(console.info, console);
}();

var warn = exports.warn = function warn() {
	if (!window.console || !console.warn) {
		return function () {};
	}
	if (!enabled) return function () {};
	return Function.prototype.bind.call(console.warn, console);
}();

var error = exports.error = function error() {
	if (!window.console || !console.error) {
		return function () {};
	}
	if (!enabled) return function () {};
	return Function.prototype.bind.call(console.error, console);
}();
/*eslint-enable */