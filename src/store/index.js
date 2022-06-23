import { createStore, combineReducers } from 'redux'
import { ProductReducer, CategoryReducer } from './reducers/index'

const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer
});

export default createStore(rootReducer);