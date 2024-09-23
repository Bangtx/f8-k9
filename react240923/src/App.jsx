import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// this is component
import {FInput, FButton, FCommonTable} from './components'

function App() {
  const columns = [
    'company', 'contact', 'country'
  ]
  
  const rows = [
    {
        'company': 'Alfreds Futterkiste',
        'contact': '1234566432',
        'country': 'VN'
    },
    {
        'company': 'F88',
        'contact': 'F88@test.com',
        'country': 'VN'
    } 
  ]

  return (
    <div>
      <h1>hello</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <FButton text="login"/>
      <FInput/>
      <FButton text="register"/>
      <FButton text="logout"/>
      <FCommonTable columns={columns} rows={rows}/>
    </div>
  )
}

export default App
