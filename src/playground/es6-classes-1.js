
class Person {
    constructor(name = "anonymous", age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their Major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let greeting = super.getDescription()
        if (this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveler("Fabian", 28, "Spain")
console.log(me.getGreeting())
console.log(me.getDescription())


const other = new Traveler()
console.log(other.getGreeting())
console.log(other.getDescription())
