"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewObjectInHTML = exports.ReactViewObject = void 0;
var _react = _interopRequireDefault(require("react")); // React Component Version (for React apps)
const ObjectViewer = (_ref) => {
  let { object, depth = 2, currentDepth = 0 } = _ref;
  if (currentDepth >= depth) {
    return /*#__PURE__*/ _react.default.createElement(
      "span",
      null,
      JSON.stringify(object)
    );
  }
  if (typeof object !== "object" || object === null) {
    return /*#__PURE__*/ _react.default.createElement(
      "span",
      null,
      JSON.stringify(object)
    );
  }
  const keys = Object.keys(object);
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    { style: { paddingLeft: 20 } },
    keys.map((key) =>
      /*#__PURE__*/ _react.default.createElement(
        "div",
        { key: key },
        /*#__PURE__*/ _react.default.createElement("strong", null, key, ":"),
        /*#__PURE__*/ _react.default.createElement(ObjectViewer, {
          object: object[key],
          depth: depth,
          currentDepth: currentDepth + 1,
        })
      )
    )
  );
};
const ReactViewObject = (_ref2) => {
  let { object, depth = null } = _ref2;
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      style: {
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        margin: "20px",
      },
    },
    /*#__PURE__*/ _react.default.createElement(ObjectViewer, {
      object: object,
      depth: depth,
    })
  );
}; // Plain JavaScript Version (for non-React use)
exports.ReactViewObject = ReactViewObject;
const viewObjectInHTML = function (object) {
  let depth =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  const renderObject = function (obj) {
    let currentDepth =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (currentDepth >= depth) {
      return JSON.stringify(obj);
    }
    if (typeof obj !== "object" || obj === null) {
      return JSON.stringify(obj);
    }
    let html = '<div style="padding-left: 20px;">';
    Object.keys(obj).forEach((key) => {
      html += "<div><strong>"
        .concat(key, ":</strong>")
        .concat(renderObject(obj[key], currentDepth + 1), "</div>");
    });
    html += "</div>";
    return html;
  };
  return renderObject(object);
}; // Export both
exports.viewObjectInHTML = viewObjectInHTML;
