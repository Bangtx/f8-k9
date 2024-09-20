import { getMethod } from "../utils"


const header = `
    <header class='white--text primary--bg'>
        <div class='header--content center between-content width--1200 display--flex'>
            <div class='logo'>Mini project</div>
            <div class='user-info'>Hoang</div>
        <div>
    </header>
`
const tableContainer = `
    <div class='table-container center'>
        <div class='list-item'>
            <div>id</div>
            <div>title</div>
            <div>action</div>
        </div>
        <div class='list-item'>
            <div>1</div>
            <div>test title</div>
            <div>action</div>
        </div>
        <div class='list-item'>
            <div>1</div>
            <div>test title</div>
            <div>action</div>
        </div>
    </div>
`

export function render() {
    const content = header + tableContainer

    const app = document.querySelector('#app')
    app.innerHTML = content
    
    getPosts()
}

const getPosts = async () => {
    const posts = await getMethod('post')
    console.log(posts)
}