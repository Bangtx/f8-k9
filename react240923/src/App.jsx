import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {v4} from 'uuid'
// import './App.css'

// this is component
import {FInput, FButton, FCommonTable} from './components'

function App() {
  // const columns = [
  //   'id', 'name', 'age', 'gender', 'address', 'action'
  // ]
  const columns = [
    {
      name: 'id',
      text: 'Mã'
    },
    {
      name: 'name',
      text: 'Tên',
      width: '50px'
    },
    {
      name: 'age',
      text: 'Tuổi'
    },
    {
      name: 'gender',
      text: 'Giới tính'
    },
    {
      name: 'address',
      text: 'Địa chỉ'
    },
    {
      text: '',
      name: 'action',
    }
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

  const onDelete = (id) => {
    console.log('delete', id)
  }

  const onUpdate = (row) => {
    console.log('update', row)
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

      <FCommonTable
          maxWidth={1000}
          columns={columns}
          rows={users}
          onDelete={onDelete}
          onUpdate={onUpdate}
      />
    </div>
  )
}

export default App
