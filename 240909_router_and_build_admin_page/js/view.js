async function renderUser() {
    // get users
    const users = await getUsers();
    
    // bind data to html
    let elementUsers = ''
    users.forEach(user => {
        elementUsers += `
            <div class="item">
                <div class='item-info'>
                    <span>${user.id}</span>
                    <span style='padding-left: 10px'>${user.name}</span>
                    <span style='padding-left: 10px'>${user.mail}</span>
                    <span style='padding-left: 10px'>${user.age}</span>
                </div>
                <div class='item-action'>
                    <button onclick="onEditOrCreate('${user.id}')">eit</button>
                    <button>del</button>
                </div>
            </div>
        `
    })
    elementUsers += `<div class='item-info'><button class="add-btn" onclick="onEditOrCreate()">Add new</button></div>`

    app.innerHTML = `<div class="list-item">${elementUsers}</div>`;
}


async function renderserForm(id = null) {
    id = Number(id)
    const user = id ? await getUser(id) : {
        id: 0,
        name: '',
        mail: '',
        age: ''
    }
    console.log(user, id)
    // build the form

    let formHtml = `
        <form id="user-form">
            <input type="text" id="name" placeholder="name" value="${user.name}"/>
            <input type="text" id="mail" placeholder="mail" value="${user.mail}"/>
            <input type="text" id="age" placeholder="age" value="${user.age}"/>
            <button class="add-btn" onclick="onSave(event, '${user.id}')">${id? 'Update' : 'Add'}</button>
        </form>
    `

    app.innerHTML = formHtml;
}