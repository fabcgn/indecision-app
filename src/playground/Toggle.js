
const appRoot = document.getElementById("app")

let visibility = false
const showDetails = () => {
    visibility = !visibility
    renderVisibility()
}

const renderVisibility = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{visibility === false ? "Show Content" : "Hide Content"}</button>
            <p>{visibility === true ? "Some Content" : ""}</p>
        </div >
    )
    ReactDOM.render(template, appRoot)
}

renderVisibility()
