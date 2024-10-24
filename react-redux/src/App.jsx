import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useSelector} from 'react-redux'
import './App.css'
import store, {onIncreaseCount, onDecreaseCount, getCount} from './store'
import {MyForm, MyList, Search} from "./components";

function App() {
    return (
        <>
            <MyForm/>
            <MyList/>
            <Search/>
        </>
    )
}

export default App
