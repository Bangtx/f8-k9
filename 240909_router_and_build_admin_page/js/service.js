const getUsers = async ()  => {
    const users = await getMethod('user');
    return users;
}

const onEditOrCreate = (id = null) => {
    router.navigate(`/user/${id ? id : '0'}`)
}

const getUser = async (id) => {
    return await getMethod(`user/${id}`)   
} 

const onSave = async (event, id = null) => {
    id = Number(id)
    event.preventDefault();
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const age = document.getElementById('age').value

    const body = {
        name,
        mail,
        age
    }
    let newUser = null
    if (id) {
        newUser = await putMethod(`user/${id}`, body)
    } else {
        newUser = await postMethod('user', body)
    }

    // back to back page
    router.navigate('')
}