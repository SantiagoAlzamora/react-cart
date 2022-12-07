import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Product } from '../types/product.type'

interface Props{
    product:Product,
}

export default function CartModalItem({product}:Props) {

    const {dispatch} = useContext(CartContext)
    return (
        <div className='modal-item'>
            <span>{product.quantity}</span>
            <span>{product.nameProduct}</span>
            <b>${product.price}</b>
            <i onClick={()=>dispatch({
                type:"DELETE_PRODUCT_CART",
                payload:product.id
            })}>✖</i>
        </div>
    )
}
