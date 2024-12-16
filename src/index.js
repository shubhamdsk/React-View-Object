import React from 'react';

// React Component Version (for React apps)
const ObjectViewer = ({ object, depth = 2, currentDepth = 0 }) => {
    if (currentDepth >= depth) {
        return <span>{JSON.stringify(object)}</span>;
    }

    if (typeof object !== 'object' || object === null) {
        return <span>{JSON.stringify(object)}</span>;
    }

    const keys = Object.keys(object);
    return (
        <div style={{ paddingLeft: 20 }}>
            {keys.map((key) => (
                <div key={key}>
                    <strong>{key}:</strong>
                    <ObjectViewer object={object[key]} depth={depth} currentDepth={currentDepth + 1} />
                </div>
            ))}
        </div>
    );
};

const ReactViewObject = ({ object, depth = null }) => {
    return (
        <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: '20px' }}>
            <ObjectViewer object={object} depth={depth} />
        </div>
    );
};

// Plain JavaScript Version (for non-React use)
const viewObjectInHTML = (object, depth = 2) => {
    const renderObject = (obj, currentDepth = 0) => {
        if (currentDepth >= depth) {
            return JSON.stringify(obj);
        }

        if (typeof obj !== 'object' || obj === null) {
            return JSON.stringify(obj);
        }

        let html = '<div style="padding-left: 20px;">';
        Object.keys(obj).forEach((key) => {
            html += `<div><strong>${key}:</strong>${renderObject(obj[key], currentDepth + 1)}</div>`;
        });
        html += '</div>';
        return html;
    };

    return renderObject(object);
};

// Export both
export { ReactViewObject, viewObjectInHTML };
