import {FCommonTable} from '../../';

export default function () {
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
    return (
        <>
            <span>products</span>
        </>
    )
}