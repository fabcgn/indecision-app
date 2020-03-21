
class Person {
    constructor(name = "anonymous", age = 0) {
        this.name = name
        this.age = age
    }
    getGretting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

const me = new Person("Fabian Seibt", 28)
console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())