"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.viewObjectInHTML = exports.ReactViewObject = void 0;
let _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
// React Component Version (for React apps)
let _ObjectViewer = function ObjectViewer(_ref) {
  let object = _ref.object,
    _ref$depth = _ref.depth,
    depth = _ref$depth === void 0 ? 2 : _ref$depth,
    _ref$currentDepth = _ref.currentDepth,
    currentDepth = _ref$currentDepth === void 0 ? 0 : _ref$currentDepth;
  if (currentDepth >= depth) {
    return /*#__PURE__*/ _react["default"].createElement(
      "span",
      null,
      JSON.stringify(object)
    );
  }
  if (_typeof(object) !== "object" || object === null) {
    return /*#__PURE__*/ _react["default"].createElement(
      "span",
      null,
      JSON.stringify(object)
    );
  }
  let keys = Object.keys(object);
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      style: {
        paddingLeft: 20,
      },
    },
    keys.map(function (key) {
      return /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          key: key,
        },
        /*#__PURE__*/ _react["default"].createElement("strong", null, key, ":"),
        /*#__PURE__*/ _react["default"].createElement(_ObjectViewer, {
          object: object[key],
          depth: depth,
          currentDepth: currentDepth + 1,
        })
      );
    })
  );
};
let ReactViewObject = (exports.ReactViewObject = function ReactViewObject(
  _ref2
) {
  let object = _ref2.object,
    _ref2$depth = _ref2.depth,
    depth = _ref2$depth === void 0 ? null : _ref2$depth;
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      style: {
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        margin: "20px",
      },
    },
    /*#__PURE__*/ _react["default"].createElement(_ObjectViewer, {
      object: object,
      depth: depth,
    })
  );
});

// Plain JavaScript Version (for non-React use)
let viewObjectInHTML = (exports.viewObjectInHTML = function viewObjectInHTML(
  object
) {
  let depth =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  let _renderObject = function renderObject(obj) {
    let currentDepth =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (currentDepth >= depth) {
      return JSON.stringify(obj);
    }
    if (_typeof(obj) !== "object" || obj === null) {
      return JSON.stringify(obj);
    }
    let html = '<div style="padding-left: 20px;">';
    Object.keys(obj).forEach(function (key) {
      html += "<div><strong>"
        .concat(key, ":</strong>")
        .concat(_renderObject(obj[key], currentDepth + 1), "</div>");
    });
    html += "</div>";
    return html;
  };
  return _renderObject(object);
});

// Export both
import PropTypes from "prop-types";

ReactViewObject.propTypes = {
  object: PropTypes.object.isRequired,
  depth: PropTypes.number,
};
