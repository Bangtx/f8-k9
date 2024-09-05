const userEndpoint = 'http://localhost:3000/users'
let selectedUserId = null
let users = []


const getUsers = async () => {
    const data = await fetch(userEndpoint);
    const users = await data.json();
    return users
}

const main = async () => {
    users = await getUsers();
    // bind data to frontend
    // get element with id = list-user
    const element = document.getElementById('list-user');

    let newElement = ''
    users.forEach(user => {
       newElement += `<li style="padding: 5px">${user.name}<button onclick="handleClickEdit('${user.id}')">edit</button><button onclick="handleClickDel('${user.id}')">del</button></li>`; 
    });
    element.innerHTML = `<div class="list-user"><ul>${newElement}</ul></div>`;
}

const handleClickEdit = (userId) => {
    const inputTag = document.getElementById('input-search');
    const curUser = users.find(user => user.id === userId)
    inputTag.value = curUser.name;
    selectedUserId = userId
    console.log(selectedUserId)
}

const handleClickBtn = () => {
    // get value from input tag
    const inputValue = document.getElementById('input-search').value;
    // const formtag = document.querySelector('#my-form')
    // formtag.preventDefault()
    // khi nao create/update
    // can 1 bien selectedUserId -> if is null -> create else update
    // ko nen tao 1 han updateUser (ko re-use code)
    saveUser(inputValue)
}

const saveUser = async (name) => {
    // call api (post user)
    // method is post
    // url is http://localhost:3000/users/
    // payload | body id {"name": "kate 123"} 
    // {"name": "kate 123"} is json string
    // khi mà mình tạo bất kì 1 thông tin gì mới thi ko gửi id lên
    // id là backend tự đông sinh

    // update            |        create
    // method PUT/PATCH            POST
    // url    /users/{id}         /users/
    const body = JSON.stringify({
        name: name
    })

    const method = selectedUserId ?  'PATCH' : 'POST'
    const endPoint = selectedUserId ? `${userEndpoint}/${selectedUserId}` : userEndpoint
    console.log(method, endPoint)
    // call api
    const response = await fetch(endPoint, {
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    selectedUserId = null
}

const handleClickDel = async (userId) => {
    // must have try/catch
    const response = await fetch(`/api/users/${userId}`, { method: 'DELETE' })
}

main()