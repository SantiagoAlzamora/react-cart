import React from 'react'
import { data } from '../data'
import ProductItem from './ProductItem'

export default function ProductList() {
  return (
    <div className='products'>
        {data.map(e=><ProductItem key={e.id} product={e}/>)}
    </div>
  )
}
