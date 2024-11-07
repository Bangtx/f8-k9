// 'use client'
// import {useState, useEffect} from 'react';
import { revalidateTag } from 'next/cache'

export default async function Home() {
    const response = await fetch(
        'http://localhost:3001/products',
        // { next: {revalidate: 20} }
        { next: {tags: ['update']} }
    )
    const products = await response.json()
    // const [products, setProducts] = useState([])

    // const getProducts = async () => {
    //     const data = await fetch('http://localhost:3001/products')
    //     setProducts(await data.json())
    // }
    //
    // useEffect(() => {
    //     getProducts()
    // }, [])

    return (
        <>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <span>{product.name}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
