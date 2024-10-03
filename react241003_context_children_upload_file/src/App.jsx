import {useState, useEffect} from 'react'
import Grand from "./components/Grand/index.jsx";
import axios from "axios";

// import {provider} from './utils'


function App() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const {data} = await axios.get('https://api-exercise-sopi.vercel.app/api/v1/products')
            setProducts(data.data.listProduct)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <ul>
                {
                    products.map(product => (
                        <li key={product._id}>{product.name}</li>
                    ))
                }
            </ul>
            {/*<provider.Provider value={{name: name}}>*/}
            {/*  <Grand name={name}/>*/}
            {/*</provider.Provider>*/}
        </>
    )
}

export default App
