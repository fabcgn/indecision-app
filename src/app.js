console.log("App is running")

const app = {
    title: "Indecision Application",
    subtitle: "Put your life in the hands of a computer!",
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ""
        console.log(app.options)
    }
    render()
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const appRoot = document.getElementById("app")

const render = () => {
    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your Options" : "No Options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                [99, 98, 97]
            }
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>

        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()

