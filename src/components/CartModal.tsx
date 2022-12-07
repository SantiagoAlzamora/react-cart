import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import CartModalItem from "./CartModalItem"

interface Props {
    setShowModal: Function
    showModal: boolean
}

export default function CartModal({ setShowModal, showModal }: Props) {

    const { state,dispatch } = useContext(CartContext)
    let total=0
    state.forEach(e=>{
        total=total+e.price*e.quantity
    })

    

    return (
        <div className={showModal ? "modal-container showed" : "modal-container"}>
            <div className="modal">
                <div>
                    <span><i onClick={() => setShowModal(false)}>❌</i></span>
                    <section className="modal-header">
                        <h3>Cart</h3>
                    </section>
                    <section className="modal-content">
                        {state.map(e => <CartModalItem key={e.id} product={e} />)}
                    </section>
                </div>
                <div className="modal-footer">
                    <p>Total: ${total}</p>
                    <button onClick={()=>dispatch({type:"EMPTY_CART"})}>Empty Cart</button>
                </div>
            </div>
        </div>
    )
}
