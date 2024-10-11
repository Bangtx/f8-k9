import './App.css'
import {useState, useReducer} from "react";
import reducer, {initProduct} from "./reducer/index.js";


function App() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        products: [],
        product: {...initProduct}
    })

    const onInput = (event) => {
        const {name, value} = event.target
        dispatch({action: 'product/onInput', payload: {name, value}})
    }

    const onSave = () => {
        // dua product vao trong products
        // reset cac field trong product
        dispatch({action: 'products/onSave'})
    }

    return (
        <>
            <h1>Product form</h1>
            <input type="text" name="name" placeholder="name" onChange={onInput}/><br/>
            <input type="text" name="price" placeholder="price" onChange={onInput}/><br/>
            <input type="text" name="description" placeholder="description" onChange={onInput}/><br/>
            <button onClick={onSave}>Save</button>

            <h2>Product List</h2>
            <ul>
                {
                    state.products.map((product, index) => {
                        return (
                            <li key={index}>
                                {product.name} - {product.price} - {product.description}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App
