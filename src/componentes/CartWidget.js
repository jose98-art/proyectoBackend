import { useCartContext } from '../app/CartContext'
import React from 'react'

const CartWidget = () => {
  const {totalProducts} = useCartContext()
return (
  <div className="cartWidget">
    <i class="fa-solid fa-cart-shopping"></i>
    <span>{totalProducts() || ''}</span>
  </div>
)
}

export default CartWidget