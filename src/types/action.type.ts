import { Product } from "./product.type"

interface AddToCartAction{
    type:"ADD_TO_CART",
    payload:Product
}

interface EmptyCartAction{
    type:"EMPTY_CART"
}

interface DeleteProductCartAction{
    type:"DELETE_PRODUCT_CART",
    payload:number
}

export type Action = AddToCartAction | EmptyCartAction | DeleteProductCartAction