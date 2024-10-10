import './App.css'
import {useState, useReducer} from "react";

// tat ca nhung gi useState lam duoc thi useReducer cung lam dc la nguoc lai
// khi component co qua nhiu state -> useReducer co the quan ly nhieu state, va co the tach ra file khac
// code trong 1 file ngan hon (thuc te so luong dong code cong lai ko he it hon)

// products = [{
//     id: 1,
//     name: 'Product 1',
//     price: 100,
//     description: 'Product 1 description'
// }]

const reducer = (state, action) => {
    console.log(state, action)
    if (action.key === 'increase') {
        return {
            ...state, count: state.count + action.value
        }
    }
    return state
}


function App() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0
    })
    return (
        <>
            <button onClick={() => dispatch({key: 'increase', value: 90})}>test reducer</button>
        </>
    )
}

export default App
