import productos from '../assets/json/productos.json'
import { useState, useEffect } from 'react'
import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [catalogo, setCatalogo] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {
        const getData =  new Promise((resolve,reject) =>{
                setTimeout(() => {
                    resolve(productos)
                },);
            })
        if(idCategoria){
             getData.then(res => setCatalogo(res.filter(art => art.categoria === Number(idCategoria))) )
        }else{
            getData.then(res=>{setCatalogo(res)})
        }
    }, [idCategoria])
    
  return (
    <div>
        <ItemList producto={catalogo}/>
    </div>
  )
}

export default ItemListContainer