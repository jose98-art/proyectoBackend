import React from 'react'
import { useCartContext } from '../app/CartContext'
import Link from './Link'

import ItemCart from './ItemCart'

const Cart = () => {
  const {totalPrice,cart,clearCart} = useCartContext()

  if(cart.length <= 0){
    return(
      <div className=' marginTop cajaMessag'>
         <h1>Carrito Vacío</h1>
          <img src='https://res.cloudinary.com/dl4ui6tel/image/upload/v1672257196/CUIDADO_cON_eL_Gato_Logotipo_mwa72b.png' alt='alert'/>
          <Link className='carritoReturn' to='/page/1'>Hacer compras</Link>
      </div>
    )
  }

  return (
    <div className='marginTop containtCarrito'>
          <div className='submenu'>
                <p>Producto</p>
                <p>Cantidad</p>
                <p>Precio unitario</p>
                <p>Subtotal</p>
                <p>Eliminar </p>
            </div>
            {
              cart.map(producto => <ItemCart key={producto.id} product={producto}/>)
            }
             <div className='containtPagar'>
                <h1>Total: $ {totalPrice()}</h1>
                {/* <button type='submit' className='pagarOVaciar' onClick={handlClick} >Terminar compra</button> */}
                <button className='pagarOVaciar' onClick={() => clearCart()}>vaciar</button>
            </div>
    </div>
  )
}

export default Cart