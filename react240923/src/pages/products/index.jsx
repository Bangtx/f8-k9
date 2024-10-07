import {FCommonTable} from '../../components';
import {useState, useEffect} from "react";
import {ProductDialog} from '../../components';
import {getMethod} from '../../utils'

export default function () {
    const [showDialog, setShowDialog] = useState(false)
    const [products, setProducts] = useState([])
    const [selectingProduct, setSelectedProduct] = useState({})

    const columns = [
        {
            text: 'Id',
            name: 'id'
        },
        {
            text: 'Name',
            name: 'name'
        },
        {
            text: 'Category',
            name: 'categoryId',
        },
        {
            text: 'Order Number',
            name: 'orderNum'
        },
        {
            text: '',
            name: 'action'
        }
    ]
    const getProducts = async () => {
        // fetch categories from server
        const response = await fetch('http://localhost:3000/products')
        setProducts(await response.json())
    }

    useEffect(() => {
        getProducts()
    }, [])

    const onUpdate = (product) => {
        setSelectedProduct(product)
        setShowDialog(true)
    }

    const onCloseDialog = () => {
        setShowDialog(false)
    }


    return (
        <>
            <span>products</span>
            <FCommonTable maxWidth={1000} columns={columns} rows={products} onUpdate={onUpdate}/>
            <ProductDialog
                show={showDialog}
                onClose={onCloseDialog}
                width={500}
                product={selectingProduct}
                reload={getProducts}
            />
        </>
    )
}