class Animal {
    #head;
    #legs = 2;
    #arms = 2;

    setHead(head) {
        this.#head = head;
    }

    setLegs(leg) {
        this.#legs = leg;
    }

    setArms(arms) {
        this.#arms = arms;
    }

    go() {
        console.log('go');
    }

    eat() {
        console.log('eat');
    }
}


class Lion extends Animal {

    constructor() {
        super();
        this.setLegs(1);
        this.setArms(4);
        this.setLegs(4);
    }

    go() {
        super.go();
        console.log('gao');
    }
}

const animal = new Lion()
animal.setHead(1)
// animal.head = 1
animal.go()