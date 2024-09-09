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
                </div>
                <div class='item-action'>
                    <button>eit</button>
                    <button>del</button>
                </div>
            </div>
        `
    })

    app.innerHTML = `<div class="list-item">${elementUsers}</div>`;
}