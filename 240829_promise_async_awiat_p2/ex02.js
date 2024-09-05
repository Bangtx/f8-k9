// xy ly ngoai le
// exception
// try {
//     throw new Error('this is my test')
// } catch (e) {
//     console.log(e)
// }

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
            if (id > 3) {
                reject('User not found')
            }
            resolve(user);
        }, 2000)
    })
}

// const getAdminUser = () => {
//     return getUser(4)
// }


const main = async () => {
    try {
        await getUser(1)
        await getUser(2)
    } catch (error) {
        console.log('error: ' + error)
    }
}

// main()

// trong 1 promise neu return ko co await thi ko the bat dc loi vao catch

// const main2 = () => {
//     // su ly ngoai ke
//     // exception
//     const user = getAdminUser();
//     const user2 = getAdminUser();
//     const user3 = getAdminUser();

//     Promise.all([user, user2, user3]).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     });
        
// }

// main2()

// khi nao thi dung promise all / async-await
// khi can thuc hien cac tac vu webapi cung 1 luc thi nen dung promise all
// khi thuc hien 1 tac vu rieng biet async-await
// khi dung async await thi bat buocj phai co try - catch