import { products } from '../../constants/data/index'
import { productTypes } from '../types'

const { SELECT_PRODUCT, FILTERED_PRODUCT } = productTypes

const initialState = {
    products,
    filterProducts: [],
    selected: null
}

const ProductReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productId)
            }
            case FILTERED_PRODUCT:
                return {
                    ...state,
                    filteredProducts: state.products.filter(product => product.categoryId === action.categoryId)
                }
            default:
                return state
    }
}

export default ProductReducer;