import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Child} from "./components";

function App() {
    const [count, setCount] = useState(0)
    console.log('re-render app')
    return (
        <>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <Child/>
        </>
    )
}

export default App
