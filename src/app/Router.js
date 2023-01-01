import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../componentes/ItemDetailContainer'
import ItemTipoContainer from '../componentes/ItemTipoContainer'
import Carrito from '../page/Carrito'
import Init from '../page/Init'
import LoginUser from '../page/LoginUser'
import PagePrincipal from '../page/PagePrincipal'
import Pedidos from '../page/Pedidos'
import Layout from './Layout'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                <Route index element={<Init/>}/>
                <Route path='page/:idCategoria' element={<PagePrincipal/>} />
                <Route path='product/:idProduct' element={<ItemDetailContainer/>}/>
                <Route path='tipe/:idTipe' element={<ItemTipoContainer/>}/>
                <Route path='cart' element={<Carrito/>}/>
                <Route path='login' element={<LoginUser/>}/>
                <Route path='buyer' element={<Pedidos/>}/>
            </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default Router