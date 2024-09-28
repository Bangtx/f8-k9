const baseUrl = 'http://103.159.51.69:2000'

const getMethod = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}/`, {
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

    if (data.detail === 'token expired') {
        await renewToken(getMethod(endpoint))
    }

    return data
  } catch (e) {
    // check e lien qian den token expire
    // goi api refresh token
    console.error('Error fetching data:', e)
  }
}

const postMethod = async (endpoint, body) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({...body})
    })

    const data = await response.json()

    if (data.detail === 'token expired') {
        await renewToken(postMethod(endpoint, body))
    }
    return data
  } catch (e) {
    console.error('Error fetching data:', e)
  }
}


const putMethod = async (endpoint, body) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({...body})
      })

      const data = await response.json()

      if (data.detail === 'token expired') {
          await renewToken(putMethod(endpoint, body))
      }

      return data
    } catch (e) {
      console.error('Error fetching data:', e)
    }
  }

const renewToken = async (callback) => {
    try {
        const response = await fetch(`${baseUrl}/login/get_new_token/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh: localStorage.getItem('refreshToken')
            })
        })

        const data = await response.json()

        // store into local storage
        localStorage.setItem('accessToken', data.access)
        localStorage.setItem('refreshToken', data.refresh)

        callback()
    } catch (e) {
        console.log(e)
    }
}

export {getMethod, postMethod, putMethod}

// get post -> token expied
// get new token
// get post -> return data (posts)