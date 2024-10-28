class Animal {
    #name = 0
    head
    _legs

    constructor(name, legs) {
        this.#name = name;
        this._legs = legs;
    }
    // constructor() {}
    getName () {
        return this.#name;
    }
}

class Dog extends Animal {
}

const animal = new Animal("Dog", 4);
const dog = new Dog("Dog", 4);
console.log(animal.getName())
console.log(animal._legs)