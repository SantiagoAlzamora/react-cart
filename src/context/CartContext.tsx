import { createContext, useReducer } from "react"
import { Action } from "../types/action.type";
import { Product } from "../types/product.type"


const cartReducer = (state: Product[], action: Action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            
            if (state.find(e => e.id === action.payload.id)) {
                return state.map(e => {
                    const tempProduct = Object.assign({}, e)
                    if (tempProduct.id === action.payload.id) {
                        tempProduct.quantity += 1
                    }
                    return tempProduct
                })
            }else{
                const product = action.payload
                product.quantity = 1
                return [...state,product]
            }
        case "EMPTY_CART":
            return []

        case "DELETE_PRODUCT_CART":
            return state.filter(e=>e.id !== action.payload)
        default:
            return state
    }
}

export const CartContext = createContext<{
    state: Product[];
    dispatch: React.Dispatch<any>;
}>
    ({
        state: [],
        dispatch: () => null
    })

export function CartContextProvider({ children }: any) {
    const [state,dispatch] = useReducer(cartReducer,[])
    
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}