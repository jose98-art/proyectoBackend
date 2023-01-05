import { useState, useEffect } from 'react'
import React from 'react'
import Login from '../componentes/Login'
import User from '../componentes/User'

const LoginUser = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const obtenerLS = () =>{
      const userLS = JSON.parse(localStorage.getItem('user')) ?? {} 
      setUser(userLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('user',JSON.stringify(user))
  }, [user])


  const eliminarUser = () =>{
    setUser({})
  }

  return (
    <div className='containtLoginUser '>
      {
      Object.entries(user).length !== 0 ? 
      <User 
      user={user}
      eliminar={eliminarUser}
      />
      :<Login 
      setUser={setUser}
      />
      }
     
    </div>
  )
}

export default LoginUser