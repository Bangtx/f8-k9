import {FCommonTable} from '../../components';
import {useState} from "react";
import {ProductDialog} from '../../components';

export default function () {
    const [showDialog, setShowDialog] = useState(false)

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
    const products = [
        {
            id: 1,
            name: 'Product 1',
            categoryId: 1,
            orderNum: 1
        }
    ]

    const onUpdate = (product) => {
        setShowDialog(true)
    }

    const onCloseDialog = () => {
        setShowDialog(false)
    }


    return (
        <>
            <span>products</span>
            <FCommonTable columns={columns} rows={products} onUpdate={onUpdate}/>
            <ProductDialog show={showDialog} onClose={onCloseDialog}/>
        </>
    )
}