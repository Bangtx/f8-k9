import {useCallback, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Child} from "./components";

const getTotalPayment = (payments) => {
    console.log('calculate total')
    let total = 0
    payments.forEach(payment => {
        total += payment.payment
    })
    return total
}

function App() {
    console.log('re-render')
    const [searchInput, setSearchInput] = useState('')

    const [payments, setPayments] = useState([
        {id: 1, customer: 'Son giua', payment: 1000},
        {id: 2, customer: 'Son be', payment: 2000},
        {id: 3, customer: 'Son lon', payment: 1000},
        {id: 4, customer: 'Hao', payment: 1200},
        {id: 5, customer: 'Hoang', payment: 2000}
    ])


    const total = useMemo(() => getTotalPayment(payments), [payments])

    const onAddPayment = () => {
        setPayments([...payments, {id: 6, customer: 'Kien', payment: 2000}])
    }

    return (
        <>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <ul>
                {
                    payments.map(payment => (
                        <li key={payment.id}>
                            {payment.customer}: {payment.payment}
                        </li>
                    ))
                }
            </ul>
            <span>total: {total}</span>
            <button onClick={onAddPayment}>add payment</button>
        </>
    )
}

export default App

// function App() {
//     const [count, setCount] = useState(0)
//     const [name, setName] = useState('')
//
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//     // const getSum = () => {
//     //     console.log('get sum')
//     //     return arr.reduce((acc, val) => acc + val, 0)
//     // }
//     //
//     // const sum = useMemo(getSum, [])
//
//
//     const getSum = useCallback(() => {
//         console.log('get sum')
//         return arr.reduce((acc, val) => acc + val, 0)
//     }, [])
//
//     const sum = useMemo(getSum, [])
//
//     const testFunc = useCallback(
//         () => {
//             return `${name} test`
//         },
//         [name]
//     )
//
//     // console.log('re-render app')
//     return (
//         <>
//             <p>sum: {sum}</p>
//             <input value={name} onChange={(e) => setName(e.target.value)}/>
//             <p>count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increase count</button>
//             <Child func={testFunc}/>
//         </>
//     )
// }
//
// export default App
