const getUser = (id) => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            salary: 1000
        }, 
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            salary: 2000
        }, 
        {
            id: 3,
            name: 'Mike Johnson',
            email:'mike@example.com',
            salary: 3000
        }
    ]


    const user = users.find(u => u.id === parseInt(id));

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 3) reject('User not found')
            resolve(user);
        }, 1000)
    })
}

const ids = [1, 2, 3, 4]
const promises = ids.map(id => {
    return getUser(id)
})
let totalSalary = 0

console.log(promises)

Promise.all(promises).then(users => {
    console.log(users)
    users.forEach(user => {
        totalSalary += user.salary
    })

    console.log(`Total salary: $${totalSalary}`)
}).catch((err) => {
    console.log(err)
});





// khi dung promise.all bat ki 1 promise nao bi loi -> catch


// const main = async () => {
//     for(id of ids) {
//         const user = await getUser(id)
//         totalSalary += user.salary
//     }
//     console.log(`Total salary: $${totalSalary}`)
// }


// main()

// const getTotalSalary = () => {
//     let totalSalary = 0
    
//     return new Promise((resolve, reject) => {
//         let count = 0
//         ids.forEach((id) => {
//             getUser(id)
//                .then(user => {
//                     totalSalary += user.salary
//                     count++
//                     if (count === ids.length) {
//                         resolve(totalSalary)
//                     }
//                 })
//         })
//     })
// }


// getTotalSalary().then((data) => {
//     console.log(`Total salary: $${data}`)
// })

// const promises = ids.map(id => {
//     return getUser(id)
// })
// let total = 0
// let maxSalary = 0

// Promise.all(promises).then((data) => {
//     // find out max salary
//     data.forEach(e => {
//         if (e.salary > maxSalary) {
//             maxSalary = e.salary
//         }
//         total += e.salary
//     })
//     // find out user and show the email
//     const userWithMaxSalary = data.find(user => user.salary === maxSalary)
//     console.log(userWithMaxSalary.email)
// })

// const getTotalSalary = () => {
//     let totalSalary = 0
//     let count = 0
//     const salaries = ids.map(async(id) => {
//         const user = await getUser(id)
//         return user.salary
//     })
//     console.log(salaries)
// }



// console.log(`Total salary: $${getT/aotalSalary()}`)

// const getTotalSalary = () => {
//     let totalSalary = 0
    
//     return new Promise((resolve, reject) => {
//         let count = 0
//         ids.forEach((id) => {
//             getUser(id)
//                .then(user => {
//                     totalSalary += user.salary
//                     count++
//                     if (count === ids.length) {
//                         resolve(totalSalary)
//                     }
//                 })
//         })
//     })
// }
