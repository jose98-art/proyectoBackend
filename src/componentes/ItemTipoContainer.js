import React from 'react'
import productos from '../assets/json/productos.json';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemTipo from './ItemTipo';

const ItemTipoContainer = () => {
  const [tipo, setTipo] = useState([])
  console.log('tipo',tipo)
  const {idTipe} = useParams()

  useEffect(() => {
      const getData =  new Promise((resolve,reject) =>{
              setTimeout(() => {
                  resolve(productos)
              },);
          })
      if(idTipe){
           getData.then(res => setTipo(res.filter(tip => tip.tipo === Number(idTipe))) )
      }else{
          getData.then(res=>{setTipo(res)})
          
      }
  }, [idTipe])
  return (
    <div>
        <ItemTipo tipo={tipo}/>
    </div>
  )
}

export default ItemTipoContainer