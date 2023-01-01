import React from 'react'
import ItemListContainer from '../componentes/ItemListContainer'

import SideBar from '../componentes/SideBar'

const PagePrincipal = () => {
  return (
    <div>
        <SideBar/>
        <ItemListContainer/>
    </div>
  )
}

export default PagePrincipal