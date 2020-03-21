let count = 0
const addOne = () => {
    count++
    render()
}
const minusOne = () => {
    count--
    render()
}
const reset = () => {
    count = 0
    render()
}

const appRoot = document.getElementById("app")

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot)
}

render()