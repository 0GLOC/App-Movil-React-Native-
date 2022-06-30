import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { ProductReducer, CategoryReducer, CartReducer, OrdersReducer, AuthReducer } from './reducers/index'

const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer,
    cart: CartReducer,
    order: OrdersReducer,
    auth: AuthReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));