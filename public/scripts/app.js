"use strict";

console.log("App is running");

var app = {
    title: "Indecision Application",
    subtitle: "Put your life in the hands of a computer!",
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        console.log(app.options);
    }
    render();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var appRoot = document.getElementById("app");

var render = function render() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        [99, 98, 97],
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
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            ),
            ";"
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
