const router = new Navigo('/');

const app = document.getElementById('app');

router.on({
    '/': () => {
        renderUser()
    },
    '/user/:id': ({data}) => {
        const {id} = data
        renderserForm(id)
    },
    '/about': () => {
        app.innerHTML = 'About Us Page!';
        console.log('About Page');
    }
})