import api from '../plugins/axios.js'


export const getMethod = async (endpoint) => {
    try {
        const {data} = await api.get(endpoint)
        return data
    } catch (e) {
        console.error(e)
    }
}

export const postMethod = async (endpoint, payload) => {
    try {
        const {data} = await api.post(endpoint, payload)
        return data
    } catch (e) {
        console.error(e)
    }
}