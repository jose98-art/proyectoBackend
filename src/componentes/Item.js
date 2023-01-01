import Link from './Link'
import React from 'react'

const Item = ({prod}) => {
  return (
    <div>

    <div className="containerCard">
      <div className="containerImag">
        <img src={prod.img} alt='' />
      </div>
      <div className="containerDate">
        <h3>{prod.nombre}</h3>
        <p>$ {prod.precio}</p>
        <p>Stock: {prod.stock}</p>
        <Link className='linkVer' to={'/product/' + prod.id}>Ver producto</Link>
        {/* <p className='linkVer'>Ver</p> */}
      </div>
     
    </div>

  </div>
  )
}

export default Item