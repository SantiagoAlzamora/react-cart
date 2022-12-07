import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


interface Props {
  setShowModal: Function
}

export default function Header({ setShowModal }: Props) {

  const {state} = useContext(CartContext)
  let totalProducts=0
  state.forEach(e=>{
    totalProducts+=e.quantity
  })
  
  return (
    <header>
      <h2>Shop</h2>
      <section>
        <i className='cart-icon' onClick={()=>setShowModal(true)}>🛒</i><i>{totalProducts}</i>
      </section>
    </header>
  )
}
