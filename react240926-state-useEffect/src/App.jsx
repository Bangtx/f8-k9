import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onChangeCount = () => { 
    setCount((count) => {
      return count + 1
    }) // update count variable
  }

  useEffect(() => {
    console.log('component mounted')
    return () => {
      console.log('component unmounted')    
    }
  }, [])

  const names = ['hoan', 'thanh', 'son be']
  
  console.log('re-render')

  return (
    <>
      <span>count: {count}</span>
      <ul>
        {
          names.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        }
      </ul>
      <button onClick={onChangeCount}>increment</button>
      <button>decrement</button>
    </>
  )
}

export default App


// class App extends React.Component {
//   componentDidMount() {
//     console.log('ComponentDidMount');
//   }

//   componentWillMount() {
//     console.log('ComponentWillMount');
//   }
  
//   componentWillUnmount() {
//     console.log('ComponentWillUnmount');
//   }

//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// export default App