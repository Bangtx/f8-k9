export const initProduct = {
    id: null,
    name: '',
    price: 0,
    description: ''
}

const countReducer = (state, action) => {
    //state = number
    switch (action.action) {
        case 'count/increase':
            return state + 1
        case 'count/decrease':
            return state - 1
        default:
            return state
    }
}


const productReducer = (state, action) => {
    // {id, name, price, description}
    console.log(state, action)
    switch (action.action) {
        case 'product/onInput':
            const newProduct = state
            newProduct[action.payload.name] = action.payload.value
            return newProduct
        default:
            return state
    }
}

const productsReducer = (state, action) => {
    // {id, name, price, description}
    console.log(state, action)
    switch (action.action) {
        case 'products/onSave':
            const product = state.product
            const products = [...state.products, product]
            // reset product
            return [...products]
        default:
            return [...state.products]
    }
}

const reducer = (state, action) => {
    return {
        count: countReducer(state.count, action), // {count: {count: 0}}
        products: productsReducer(state, action),
        product: productReducer(state.product, action) //{id: null, name: 'tes', price: 0, description: ''}
    }
}

export default reducer