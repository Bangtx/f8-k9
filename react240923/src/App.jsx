import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {v4} from 'uuid'
// import './App.css'

// this is component
import {FInput, FButton, FCommonTable} from './components'

function App() {
  const columns = [
    'id', 'name', 'age', 'gender', 'address', 'action'
  ]
  const [users, setUsers] = useState([
    {id: v4(), name: 'John', age: 25, gender: 'male', address: 'HN'}
  ])


  const [user, setUser] = useState({
    id: v4(),
    name: '',
    age: '',
    gender: '',
    address: ''
  })

  const onInput = (e, key) => {
    const updateuser = user
    updateuser[key] = e.target.value
    setUser({...updateuser})
  }

  const onSave = () => {
    setUsers([...users, user])
    setUser({
      id: v4(),
      name: '',
      age: '',
      gender: '',
      address: ''
    })
  }

  return (
    <div>
      <input type='text' placeholder='name' onChange={(e) => onInput(e, 'name')}/>
      <input type='text' placeholder='age' onChange={(e) => onInput(e, 'age')}/>
      <select onChange={(e) => onInput(e, 'gender')}>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>
      <input type='text' placeholder='address' onChange={(e) => onInput(e, 'address')}/>
      <button onClick={onSave}>Save</button>

      <FCommonTable columns={columns} rows={users}/>
    </div>
  )
}

export default App
