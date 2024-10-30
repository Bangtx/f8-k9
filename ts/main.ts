interface IAnimal {
    go: () => void
    speak: () => void,
    setName: (name: string) => void
    getName: () => string
}

abstract class Animal implements IAnimal {
    private name = 'anunal'
    private legs = 4
    private head

    constructor () {
        this.head = 1
    }

    public setName(name: string) {
        this.name = name
    }

    public getName() {
        return this.name
    }

    public go() {
        console.log('go')
    }

    public speak() {
        console.log('speak')
    }

}

class Cat extends Animal {
    constructor (name: string) {
        super()
        this.setName(name)
    }

    public go() {
        super.go()
        console.log('go to school')
    }
}

const cat = new Cat('kitty')
cat.getName()



// interface Master {
//     id: number,
//     name: string | null
// }

// interface Subject extends Master {}

// interface Student extends Subject {
//     subject: Subject
// }

// const getName = (): string => {
//     return 'Duy be'
// }

// const _name: string = getName()
// console.log(_name)

// const students: Student[] = [
//     {
//         id: 1,
//         name: 'test',
//         subject: {
//             id: 1,
//             name: 'toan',

//         }
//     },
//     {
//         id: 2,
//         name: 'DUy be',
//         subject: {
//             id: 1,
//             name: 'toan'
//         }
//     }
// ]

// console.log(students)interface IAnimal {
//     go: () => void
//     speak: () => void,
//     setName: (name: string) => void
//     getName: () => string
// }
//
// abstract class Animal implements IAnimal {
//     private name = 'anunal'
//     private legs = 4
//     private head
//
//     constructor () {
//         this.head = 1
//     }
//
//     public setName(name: string) {
//         this.name = name
//     }
//
//     public getName() {
//         return this.name
//     }
//
//     public go() {
//         console.log('go')
//     }
//
//     public speak() {
//         console.log('speak')
//     }
//
// }
//
// class Cat extends Animal {
//     constructor (name: string) {
//         super()
//         this.setName(name)
//     }
//
//     public go() {
//         super.go()
//         console.log('go to school')
//     }
// }
//
// const cat = new Cat('kitty')
// cat.getName()
//
//
//
// // interface Master {
// //     id: number,
// //     name: string | null
// // }
//
// // interface Subject extends Master {}
//
// // interface Student extends Subject {
// //     subject: Subject
// // }
//
// // const getName = (): string => {
// //     return 'Duy be'
// // }
//
// // const _name: string = getName()
// // console.log(_name)
//
// // const students: Student[] = [
// //     {
// //         id: 1,
// //         name: 'test',
// //         subject: {
// //             id: 1,
// //             name: 'toan',
//
// //         }
// //     },
// //     {
// //         id: 2,
// //         name: 'DUy be',
// //         subject: {
// //             id: 1,
// //             name: 'toan'
// //         }
// //     }
// // ]
//
// // console.log(students)