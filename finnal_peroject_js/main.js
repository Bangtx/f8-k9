
document.querySelector('#app').innerHTML = ``


const baseUrl = 'http://103.159.51.69:2000'

const getPost = () => {
  
}

const getMethod = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('aceessToken')}`
      },
    })
    // endpoint = post
    // http://103.159.51.69:2000/post
    // neu token het han -> token expired -> catch
  } catch (e) {
    // check e lien qian den token expire
    // goi api refresh token
    console.error('Error fetching data:', e)
  }
}

const login = async () => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'your_email',
        password: 'your_password'
      })
    })
  } catch (e) {
    console.error('Error fetching data:', e)
  }
}