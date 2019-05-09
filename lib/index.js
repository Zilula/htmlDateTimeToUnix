"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getUnixTime = function getUnixTime(date, time) {
  var unix = new Date(date + ' ' + time);

  if (isNaN(unix)) {
    throw 'NaN both date and time must be strings';
  }

  return unix.getTime();
};

var _default = getUnixTime;
exports["default"] = _default;