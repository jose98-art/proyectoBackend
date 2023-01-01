import React from 'react'
import Item from './Item'

const ItemList = ({producto}) => {
  return (
    <div className='marginTop containerProductos '>
        {producto.map(prod =>{
            return <Item key={prod.id} prod={prod} />
        })}
    </div>
  )
}

export default ItemList