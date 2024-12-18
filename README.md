# react-view-object

`react-view-object` is a React component (and plain JavaScript utility) that renders and displays complex JavaScript objects in a human-readable, hierarchical format. It helps visualize and debug nested data structures with ease.

# Features

Render complex objects in a nested, indented format.
Customizable depth for how deep the object structure is displayed.
Works in both React and plain JavaScript environments.

# Installation

You can install `react-view-object` via npm or yarn:

```bash
npm install react-view-object
# or
yarn add react-view-object

```

## Usage

1. Using react-view-object in a React App
   To use react-view-object in a React app, follow these steps:

### Step 1: Install the Package

Install the `react-view-object` package:

```
npm install react-view-object
```

### Step 2: Import and Use in Your React Components

In your React component (e.g., App.js), import ReactViewObject and pass a JavaScript object to display it.

```javascript
import React from "react";
import { ReactViewObject } from "react-view-object";

const App = () => {
  const complexObject = {
    name: "John Doe",
    age: 30,
    isActive: true,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
      postalCode: {
        code: "12345",
        extended: "6789",
      },
    },
    hobbies: ["Reading", "Traveling", "Coding"],
    friends: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 32 },
    ],
    additionalInfo: {
      languages: ["English", "Spanish"],
      certifications: {
        programming: ["React", "Node.js", "Python"],
        languages: ["TOEFL", "DELE"],
      },
    },
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Complex Object Viewer</h1>
      <ReactViewObject object={complexObject} depth={3} />
    </div>
  );
};

export default App;
```

#### **object** : The JavaScript object to be displayed.

#### **depth** (optional): The depth level of nested objects to display. Default is 2. You can adjust it based on your needs.

### Step 3: Run Your React App

Make sure you have React set up in your app, then run:

```bash
npm run dev
```

Your complex object will be displayed in a readable format.

---

# 2. Using react-view-object in Plain JavaScript (Without React)

If you're not using React, you can still use `react-view-object` as a utility to display complex objects in a readable format directly in the browser.

### Step 1: Install the Package

Install `react-view-object` via npm:

```bash
npm install react-view-object

```

### Step 2: Import and Use the Utility in JavaScript

In your JavaScript file (e.g., index.js), import the viewObjectInHTML function and pass a JavaScript object to display it.

```javascript
import { viewObjectInHTML } from "react-view-object"; // Import the package

const user = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  hobbies: ["Reading", "Traveling", "Coding"],
  isActive: true,
};

// Call the function to render the object in HTML
const htmlString = viewObjectInHTML(user, 3); // Set depth level to customize the display
document.getElementById("output").innerHTML = htmlString; // Display in the DOM
```

### Step 3: Create an HTML File

Create an HTML file (e.g., `index.html`) with a `div` element to display the object.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object Viewer</title>
  </head>
  <body>
    <div id="output"></div>
    <!-- Placeholder for displaying object -->
    <script src="index.js"></script>
  </body>
</html>
```

### Step 4: Open the HTML File in Your Browser

Open the index.html file in your browser, and the object will be displayed in a readable format inside the #output div.

# API

## React Component: `ReactViewObject`

- `object` (required): The JavaScript object you want to render.
- `depth` (optional): The depth of the nested structure to render. Default is 2.

## Plain JavaScript Function: `viewObjectInHTML`

- `object` (required): The JavaScript object to render.
- `depth` (optional): The depth of the nested structure to render. Default is 2.
  Example:

```javascript
const htmlString = viewObjectInHTML(myObject, 3);
document.getElementById("output").innerHTML = htmlString;
```

---

# Development

## Setting Up Locally

- Clone the repository:

```bash
git clone <repository-url>
cd react-view-object
```

- Install dependencies:

```bash
npm install
```

- To start testing the package locally, you can link it with:

```bash
npm link
```

- In your test project:

```bash
npm link react-view-object
```

## Depth Parameter

The `depth` parameter controls how deeply nested objects are displayed:

- `depth=1`: Displays only the top-level properties.
- `depth=2`: Displays the first level of nested objects.
- `depth=3`: Displays up to three levels of nested objects.

The default depth is `2` if not provided.

# Contributing

We welcome contributions! If you'd like to contribute, please fork the repository and create a pull request. For major changes, please open an issue first to discuss what you would like to change.

# License

MIT License

Copyright (c) 2024 Shubham Deshmukh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software...
