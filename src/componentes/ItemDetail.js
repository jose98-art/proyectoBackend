import { useState } from 'react'
import Link from './Link';
import { useCartContext } from '../app/CartContext'
import ItemCount from '../componentes/ItemCount'

const ItemDetail = ({product}) => {
  const [cantProduc, setCantProduc] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setCantProduc(true)
    addProduct(product, quantity)
  }
  return (
    <div >
      
      <div className='cardProduct'>
        <div className='cardImg'>
          <img src={product.img} alt='foto'/>
        </div>
        <div className='infoCard'>
          <h1>{product.nombre}</h1> 
          <h3>${product.precio} MXN</h3>   
          <p>Descripcion: {product.descripcion}</p>
        <div className='inputTallas'>
          <label><input name='talla' type='radio'/>EXCHI</label>
          <label><input name='talla' type='radio'/>CHI</label>
          <label><input name='talla' type='radio'/>MED</label>
          <label><input name='talla' type='radio'/>GDE</label>
          <label><input name='talla' type='radio'/>EX</label>
        </div>
          <p >Stock: {product.stock}</p>     
          {
            cantProduc
              ?<Link className='btnLin' to='/cart'>Agregar al carrito</Link>
              :<ItemCount stock={product.stock} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail