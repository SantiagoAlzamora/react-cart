import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Product } from '../types/product.type'

interface Props {
    product: Product
}

export default function ProductItem({ product }: Props) {

    const {dispatch} = useContext(CartContext)

    function handleAddCart(){
        dispatch({
            type:"ADD_TO_CART",
            payload:product
        })
    }

    return (
        <div className='product'>
            <img src={product.img} alt="" />
            <h4>{product.nameProduct}</h4>
            <span>{product.price}</span>
            <button onClick={handleAddCart}>Add to cart</button>
        </div>
    )
}
