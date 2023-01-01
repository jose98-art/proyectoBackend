import React from 'react'
import Slider from '../componentes/Slider'

const Init = () => {
    const fondoTransparente = "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672061019/CUIDADO_cON_eL_Gato_bqi5go.png"
    const mockImagenes =[
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026964/INSPIRACI%C3%93N__Poleras_Gr%C3%A1ficas_En_Modo_Primaveral_kxrg1o.jpg",
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026961/Hombres_Pantalones_cargo_con_bolsillo_con_solapa_dgxotp.jpg",
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026960/Cazadora_corta_de_cintura_con_cord%C3%B3n_de_cuadros_our9zr.png",
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026952/instagram_aesthetic_en_2022_Zapato_deportivo_de_mujer_Zapatos_deportivos_de_moda_Zapatos_converse_de_mujer_xvgm8a.jpg",
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026950/%D0%A2%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE_%D1%82%D0%B2%D0%BE%D0%B8_%D0%B3%D1%83%D0%B1%D1%8B_%D0%B2_%D0%BF%D1%80%D0%B0%D0%B2%D0%B5_%D0%BA%D0%B0%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F_%D0%BC%D0%BE%D0%B5%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B0__sie54p.jpg",
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026947/Negro_r4obau.jpg",
    "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672026945/brand_designer_men_s_leisure_chelsea_boots_warm_fur_winter_shoes_genuine_leather_platform_boot_moto_ankle_botas_hombre_zapatos_-_black_without_fur___9___China_ajib18.jpg"

  ]
  return (
    <div className='containtSlider'>
        <img className='sobreFondo' src={fondoTransparente} alt='sobreFondo'/>
        <Slider imagenes={mockImagenes}/>
    </div>
  )
}

export default Init