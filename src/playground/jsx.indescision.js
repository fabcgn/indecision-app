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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
    console.log(randomNum)
}

const appRoot = document.getElementById("app")

const render = () => {
    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your Options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
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

