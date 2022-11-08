import initialState from "../store/initialState"
import * as Actions from './actions'

export const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case Actions.ADD_CART:
            return {
                list: action.list,
                subtotal:action.subtotal
            }
        case Actions.INCREASE_CART:
            return {
                list: action.list,
                subtotal: action.subtotal,
            }
        case Actions.DECREASE_CART:
            return {
                list: action.list,
                subtotal: action.subtotal,
            }
        case Actions.FETCH_CART:
            return {
                list: action.list,
                subtotal: action.subtotal,
            }
        default:
            return state
    }
}