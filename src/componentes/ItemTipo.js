import React from 'react'
import Tipo from './Tipo'

const ItemTipo = ({tipo}) => {
  return (
    <div className='marginTop containerProductos'>
        {tipo.map(prod =>{
            return <Tipo key={prod.id} tip={prod}/>
        })}
    </div>
  )
}

export default ItemTipo