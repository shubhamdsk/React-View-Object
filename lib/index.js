"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewObjectInHTML = exports.ReactViewObject = void 0;

var _react = _interopRequireDefault(require("react"));

// React Component Version (for React apps)
const ObjectViewer = ({ object, currentDepth = 0 }) => {
  // If the object is not a valid object (like a string or number), return its value
  if (typeof object !== "object" || object === null) {
    return <span>{JSON.stringify(object)}</span>;
  }

  // If the current object is an array, map over its elements
  if (Array.isArray(object)) {
    return (
      <div style={{ paddingLeft: 20 }}>
        {object.map((item, index) => (
          <div key={index}>
            <ObjectViewer object={item} />
          </div>
        ))}
      </div>
    );
  }

  // Otherwise, map over the object's keys
  const keys = Object.keys(object);
  return (
    <div style={{ paddingLeft: 20 }}>
      {keys.map((key) => (
        <div key={key}>
          <strong>{key}:</strong>
          <div style={{ paddingLeft: 20 }}>
            <ObjectViewer object={object[key]} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ReactViewObject = ({ object }) => {
  return (
    <div
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        margin: "20px",
      }}
    >
      <ObjectViewer object={object} />
    </div>
  );
};

// Plain JavaScript Version (for non-React use)
exports.ReactViewObject = ReactViewObject;

const viewObjectInHTML = function (object) {
  const renderObject = function (obj) {
    // If the object is not a valid object (like a string or number), return its value
    if (typeof obj !== "object" || obj === null) {
      return JSON.stringify(obj);
    }

    // If it's an array, render it as a list
    if (Array.isArray(obj)) {
      return `<div style="padding-left: 20px;">${obj
        .map((item) => `<div>${renderObject(item)}</div>`)
        .join("")}</div>`;
    }

    // Render object properties
    let html = '<div style="padding-left: 20px;">';
    Object.keys(obj).forEach((key) => {
      html += `<div><strong>${key}:</strong>${renderObject(obj[key])}</div>`;
    });
    html += "</div>";
    return html;
  };

  return renderObject(object);
};

exports.viewObjectInHTML = viewObjectInHTML;
