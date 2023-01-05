import React from 'react'

const User = ({user,eliminar}) => {
  
  const {nombre, apellido, email} = user
  return (
    <div className='containt user'>
    <div className='user2'>
        <div className='containtUserFoto'>
        <img src='https://res.cloudinary.com/dl4ui6tel/image/upload/v1672603813/-6_s3lowa.jpg' alt='FotoUser'/>
        </div>
        <div className='containtDate'>
            <p>{nombre} {apellido}</p>
            <p>{email}</p>
        </div>
        <div className='btnEditEliminar'>
          <button type='button' onClick={eliminar}>ELIMINAR PERFIL</button>
        </div>
    </div>
   

</div>
  )
}

export default User