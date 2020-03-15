"use strict";

console.log("App is running");

var app = {
    title: "Indecision Application",
    subtitle: "Put your life in the hands of a computer!",
    options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    app.title && React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your Options" : "No Options"
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

var user = {
    name: "Fab Ian",
    age: 19,
    location: "Cologne"
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
