"use strict";

console.log("App is running");

// JSX

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Fabian Seibt"
    ),
    React.createElement(
        "p",
        null,
        "Age: 28"
    ),
    React.createElement(
        "p",
        null,
        "Location: Cologne, Germany"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
