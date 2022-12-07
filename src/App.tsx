import { useState } from "react"
import CartModal from "./components/CartModal"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className="app">
      <Header setShowModal={setShowModal} />
      <ProductList />
      <CartModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default App
