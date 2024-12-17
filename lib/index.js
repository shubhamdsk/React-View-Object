"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewObjectInHTML = exports.ReactViewObject = void 0;

var _react = _interopRequireDefault(require("react"));

// Helper function to recursively render the object with indentation
const ObjectViewer = ({ object }) => {
  // If it's a primitive value or null, return it as a string
  if (typeof object !== "object" || object === null) {
    return <span>{JSON.stringify(object)}</span>;
  }

  // Recursively render nested objects
  const keys = Object.keys(object);
  return (
    <div style={{ paddingLeft: 20 }}>
      {keys.map((key) => (
        <div key={key}>
          <strong>{key}:</strong>
          <ObjectViewer object={object[key]} />
        </div>
      ))}
    </div>
  );
};

const ReactViewObject = ({ object }) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        whiteSpace: "pre-wrap",
        margin: "20px",
      }}
    >
      <ObjectViewer object={object} />
    </div>
  );
};

exports.ReactViewObject = ReactViewObject;

const viewObjectInHTML = function (object) {
  const renderObject = function (obj) {
    if (typeof obj !== "object" || obj === null) {
      return JSON.stringify(obj);
    }

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
