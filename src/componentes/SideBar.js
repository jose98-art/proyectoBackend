import React from 'react'
import Link from './Link'

const SideBar = () => {
  return (
    <div>
        <div className='containerSider'>
            <div className='siderBar'>
                
                <div className='containtList'> Hombre
                  <ul className='sideList'>
                    <li> <Link> JEANS</Link> </li>
                    <li> <Link> PLAYERAS</Link> </li>
                    <li> <Link> JOGGERS</Link> </li>
                    <li> <Link> CAMISAS</Link> </li>
                    <li> <Link> ACCESORIOS</Link> </li>
                  </ul>
                </div>

                <div className='containtList'> MUJER
                  <ul className='sideList'>
                    <li> <Link> JEANS</Link> </li>
                    <li> <Link> PLAYERAS</Link> </li>
                    <li> <Link> JOGGERS</Link> </li>
                    <li> <Link> CAMISAS</Link> </li>
                    <li> <Link> ACCESORIOS</Link> </li>
                  </ul>
                </div>

                <div className='containtList'> NIÑOS
                  <ul className='sideList'>
                    <li> <Link> JEANS</Link> </li>
                    <li> <Link> PLAYERAS</Link> </li>
                    <li> <Link> JOGGERS</Link> </li>
                    <li> <Link> CAMISAS</Link> </li>
                    <li> <Link> ACCESORIOS</Link> </li>
                  </ul>
                </div>

                <div className='containtList'> CALZADOS
                  <ul className='sideList'>
                    <li> <Link> JEANS</Link> </li>
                    <li> <Link> PLAYERAS</Link> </li>
                    <li> <Link> JOGGERS</Link> </li>
                    <li> <Link> CAMISAS</Link> </li>
                    <li> <Link> ACCESORIOS</Link> </li>
                  </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SideBar