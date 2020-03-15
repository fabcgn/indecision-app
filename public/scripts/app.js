"use strict";

console.log("App is running");

// JSX

var template = React.createElement(
  "p",
  null,
  "Does that now great change?"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
