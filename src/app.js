console.log ("App is running")

// JSX

let template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
)

let templateTwo = (
    <div>
        <h1>Fabian Seibt</h1>
        <p>Age: 28</p>
        <p>Location: Cologne, Germany</p>
    </div>
)

const appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)