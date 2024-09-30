import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import {router} from "./utils";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
        {/*<App />*/}
    </StrictMode>,
)
