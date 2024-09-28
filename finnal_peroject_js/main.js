import Navigo from 'navigo'; // When using ES modules.
import { render as LoginPage } from './pages/login/'
import { render as HomePage } from './pages';

export const router = new Navigo('/');


router.on({
  '/': function () {
    const accessToken = localStorage.getItem('accessToken')
    // if we haven't logged yet -> there is no accessToken in local
    // redirect to login page
    if (!accessToken) {
      router.navigate('/login')
      return
    }
    HomePage()
  },
  'login': function () {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      router.navigate('')
      return
    }
    LoginPage()
  },
  'register': function () {
    console.log('Register')
  }
}).resolve()
// document.querySelector('#app').innerHTML = ``


// const baseUrl = 'http://103.159.51.69:2000'

// const getPost = () => {
  
// }

// const getMethod = async (endpoint) => {
//   try {
//     const response = await fetch(`${baseUrl}/${endpoint}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('aceessToken')}`
//       },
//     })
//     // endpoint = post
//     // http://103.159.51.69:2000/post
//     // neu token het han -> token expired -> catch
//   } catch (e) {
//     // check e lien qian den token expire
//     // goi api refresh token
//     console.error('Error fetching data:', e)
//   }
// }

// const login = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/${endpoint}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: 'your_email',
//         password: 'your_password'
//       })

//       // {
//       //   "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY29kZSI6bnVsbCwibmFtZSI6ImhvYW5nIiwiZW1haWwiOiJob2FuZ0B0ZXN0LmNvbSIsImV4cCI6MTcyNjE1MzA2OH0.-WEGQvmRaswGkytBzNNrKmFjoGd2MfAnsw67bfBMTkk",
//       //   "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY29kZSI6bnVsbCwibmFtZSI6ImhvYW5nIiwiZW1haWwiOiJob2FuZ0B0ZXN0LmNvbSJ9.EOwhQR4ajS8sRAYbNBA4ggxaK3IeRPACrYUu6oeDH7g"
//       // }
//     })
//   } catch (e) {
//     console.error('Error fetching data:', e)
//   }
// }