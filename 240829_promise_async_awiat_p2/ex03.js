const userEndpoint = 'http://localhost:3000/users'
const commentEndpoint = 'http://localhost:3000/comments'
const postEndpoint = 'http://localhost:3000/posts'

const getUsers = () => {
    return fetch(userEndpoint)
}

const getPosts = () => {
    return fetch(postEndpoint)
}

const getComments = () => {
    return fetch(commentEndpoint)
}

const createUser = () => {
    return fetch(userEndpoint, {
        method: 'POST',
        body: JSON.stringify({
            name: 'John Doe'
        })
    })
}

const main = async() => {
    // await createUser()
    // try {
    //     const responseUser = await fetch(userEndpoint)
    //     const responsePost = await fetch(postEndpoint)
    //     console.log(await responseUser.json(), await responsePost.json())
    // } catch (err) {
    //     console.error(err)
    // }
}

main()