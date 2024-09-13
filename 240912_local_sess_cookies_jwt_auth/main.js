// localStorage.setItem('age', '26')

// localStorage.setItem('age', 26)
// localStorage.setItem('age', 'test')

// localStorage.getItem(;age)


// sessionStorage.setItem('age', 26)
// sessionStorage.setItem('name', 'test')

// const user = {
//     id: 1,
//     name: 'John Doe',
//     age: 26
// }

// localStorage.setItem('user', JSON.stringify(user))

// const myUser = localStorage.getItem('user')
// const myObject = JSON.parse(myUser)
// console.log(myObject.name)

// cookies

// document.cookie = 'name=John'
const cookieData = document.cookie = "username=test; expires=Thu, 12 Sep 2025 14:00:00 UTC";
console.log(cookieData.split(";")[0].split('=')[1])
