const baseUrl = 'http://localhost:3000'

const getMethod = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`);
        return await response.json()
    } catch (e) {
        console.error('An error occurred:', e);
    }
}

const postMethod = async (endpoint, data) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json()
    } catch (e) {
        console.error('An error occurred:', e);
    }
}

const putMethod = async (endpoint, data) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json()
    } catch (e) {
        console.error('An error occurred:', e);
    }
}