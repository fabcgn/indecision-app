console.log ("App is running")

const app = {
    title: "Indecision Application",
    subtitle: "Put your life in the hands of a computer!",
    options: ["One", "Two"]
}

let template = (
    <div>
        {app.title && <h1>{app.title}</h1>}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your Options" : "No Options"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
)

const user ={
    name: "Fab Ian",
    age:  19,
    location: "Cologne",
} 

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}

let templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18)&& <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)