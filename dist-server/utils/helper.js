"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPromiseAsJson = void 0;

var renderPromiseAsJson = function renderPromiseAsJson(res, status, promise) {
  return promise.then(function (data) {
    res.status(status).json({
      data: data
    });
  });
};

exports.renderPromiseAsJson = renderPromiseAsJson;