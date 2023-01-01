import React, { useState } from 'react'

const Slider = ({imagenes}) => {
     //Varialbe y estados
     const [imagenActual, setImagenActual] = useState(0)
     const cantidad = imagenes?.length
 
     //Return prematuro para evitar errores
     if(!Array.isArray(imagenes) || cantidad === 0)
     return
 
     //siguiente imagen automatizada
     const siguienteImagen = () =>{
         setTimeout(() => {
             setImagenActual(imagenActual === cantidad - 1 ? 0 :imagenActual +1)
         }, 5000);
         
     }
 
     //anterior imagen
     // const anteriorImagen = () =>{
        
     //     setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual -1)
     // }
 
   return (
     <div className='subContaintSlider'>
         {/* <button onClick={anteriorImagen}>
             <i class="fa-solid fa-arrow-left"></i>
         </button> */}
 
         {imagenes.map((imagen, index)=>{
             return (
             <div className={imagenActual === index ? "slide active" : "slide"}>
                 {imagenActual === index &&(
                     <img className='imagenesSlider' key={index} src={imagen} alt="imagen"/>
                 )}
                
             </div>
             )
         })}
         {siguienteImagen()}
         
         {/* <button onClick={siguienteImagen}>
             <i class="fa-regular fa-arrow-right"></i>
         </button> */}
         
     </div>
   )
}


export default Slider