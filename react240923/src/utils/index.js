export * from './router.jsx'
export * from './api.js'


export const readFile = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => resolve(reader.result)
    });
};