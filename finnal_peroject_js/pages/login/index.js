import { postMethod } from "../../utils"
import { router } from "../../main"

const content = `
    <form class='login-form'>
        <h1>Login Page</h1>
        <input type="text" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button id='login-btn'>Login</button>
    </form>
`

export const render = () => {
    const app = document.querySelector('#app')
    app.innerHTML = content

    // get login button
    const loginBtn = document.querySelector('#login-btn')
    loginBtn.addEventListener('click', (e) => onLogin(e));
}

const onLogin = async (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    console.log(email, password)
    // call api login
    // gen body
    // const body = {
    //     email: email,
    //     password: password
    // }
    const body = {email, password}
    const responce = await postMethod('login', body)

    // store into local storage
    localStorage.setItem('accessToken', responce.access)
    localStorage.setItem('refreshToken', responce.refresh)
    // save sucessfully

    // go to home page
    router.navigate('/')
    console.log('?????')
}
