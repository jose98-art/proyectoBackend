import React from 'react'
import Link from './Link';

const Tipo = ({tip}) => {
  return (
    <div>
        <div className="containerCard">
      <div className="containerImag">
        <img src={tip.img} alt='producto' />
      </div>
      <div className="containerDate">
        <h3>{tip.nombre}</h3>
        <p>$ {tip.precio}</p>
        <p>Stock: {tip.stock}</p>
        <Link className='linkVer' to={'/product/' + tip.id}>Ver producto</Link>
        {/* <p className='linkVer'>Ver</p> */}
      </div>
     
    </div>
    </div>
  )
}

export default Tipo