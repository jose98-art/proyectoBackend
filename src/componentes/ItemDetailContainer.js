import productos from '../assets/json/productos.json'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
    const [data, setData] = useState({})
    const {idProduct} = useParams()

    useEffect(() => {  
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
        getData.then(res =>setData(res.find(art => art.id === Number(idProduct))))
    }, [idProduct])

  return (
    <div className='marginTop cajaCardProduct'>
        <ItemDetail product={data} />
    </div>
  )
}

export default ItemDetailContainer