import {FCommonTable} from '../../components';
import {useState, useEffect} from "react";
import {CategoryDialog} from '../../components';

export default function () {
    const [showDialog, setShowDialog] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectingCategory, setSelectedCategory] = useState({})

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
            text: 'Order Number',
            name: 'orderNum'
        },
        {
            text: '',
            name: 'action'
        }
    ]

    const getCategories = async () => {
        // fetch categories from server
        const response = await fetch('http://localhost:3000/categories')
        setCategories(await response.json())
    }

    useEffect(() => {
        getCategories()
    }, [])

    const onUpdate = (category) => {
        setSelectedCategory(category)
        setShowDialog(true)
    }

    const onCloseDialog = () => {
        setShowDialog(false)
    }


    return (
        <>
            <span>products</span>
            <FCommonTable maxWidth={1000} columns={columns} rows={categories} onUpdate={onUpdate}/>
            <CategoryDialog
                category={selectingCategory}
                show={showDialog}
                onClose={onCloseDialog}
                width={500}
                reload={getCategories}
            />
        </>
    )
}