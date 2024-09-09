const baseUrl = 'http://localhost:3000'

const getMethod = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`);
        return await response.json()
    } catch (e) {
        console.error('An error occurred:', e);
    }
}
