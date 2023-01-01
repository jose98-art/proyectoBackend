import React from 'react'
import CartWidget from './CartWidget'
import Link from './Link'

const NavBar = () => {
    const imgLogo = "https://res.cloudinary.com/dl4ui6tel/image/upload/v1672032305/Asunto_3_tspant.png"
  return (
    <div className='containtNavBar'>
        
        <div className='ContaintnavLogo'>
          <Link to=''> <img src={imgLogo} alt='logo'/></Link>
            
        </div>
        <Link to=''> <p className='textLogo'>CUIDADO CON EL GATO</p></Link>

       

        <div className='containtnavlink'>
          <ul>
            <li><Link to='/page/1'>JEANS</Link></li>
            <li><Link to='/page/2'>PLAYERAS</Link></li>
            <li><Link to='/page/3'>JOGGERS</Link></li>
            <li><Link to='/page/4'>CAMISAS</Link></li>
            <li><Link to='/page/5'>ACCESORIOS</Link></li>
          </ul>
        </div>
        <div className='containtnavlink2'>
          <ul>
            <li> <Link to='/cart'><CartWidget/></Link> </li>
            <li> <Link to='/login'><i class="fa-solid fa-user"></i></Link> </li>
            <li> <Link to='/buyer'><i class="fa-solid fa-clipboard"></i></Link> </li>
          </ul>
          {/* <p>buscar</p> */}

        </div>
      
    </div>
  )
}

export default NavBar