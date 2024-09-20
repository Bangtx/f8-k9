const baseUrl = 'http://103.159.51.69:2000'

const getMethod = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
    // endpoint = post
    // http://103.159.51.69:2000/post
    // neu token het han -> token expired -> catch
    const data = await response.json()

    if (data.detail = 'token expired') {
        await renewToken()
    } 
  } catch (e) {
    // check e lien qian den token expire
    // goi api refresh token
    console.error('Error fetching data:', e)
  }
}

const postMethod = async (endpoint, body) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({...body})
    })

    const data = await response.json()

    if (data.detail = 'token expired') {
        await renewToken()
    } 
  } catch (e) {
    console.error('Error fetching data:', e)
  }
}


const putMethod = async (endpoint, body) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({...body})
      })
  
      const data = await response.json()

      if (data.detail = 'token expired') {
          await renewToken()
      } 
    } catch (e) {
      console.error('Error fetching data:', e)
    }
  }

const renewToken = async () => {
    const response = await fetch(`${baseUrl}/login/get_new_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: localStorage.getItem('refreshToken')
        })
    })
    
    const data = await response.json()
    console.log(data)
}

export {getMethod, postMethod, putMethod}