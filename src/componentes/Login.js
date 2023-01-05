import { useState } from 'react'
import Error from './Error'
import React from 'react'


const Login = ({setUser}) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [contraseñados, setContraseñados] = useState('')

    const [error,setError] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()

        //validación de formulario
        if([nombre,apellido,email,contraseña,contraseñados].includes('')){
            console.log('Hay al menos un campo vacío')
            setError(true)
            return
        }
        setError(false)

        //objeto de user
        const objetoUser ={
            nombre,
            apellido,
            email,
            contraseña,
            contraseñados
        }
        setUser(objetoUser)

        //Reiniciar formulario
        setNombre('')
        setApellido('')
        setEmail('')
        setContraseña('')
        setContraseñados('')

    
        

    }
  return (
        <div className='containt login'>
            <div className='containtInputsLogin'>
                <div className='containtSesion'>
                    {/* <button>Iniciar Sesión</button> */}
                   
                        {error &&  <Error>Todos los campos son obligatorios</Error>}

                    <button>Crear Cuenta</button>
                </div>

                <form
                onSubmit={handleSubmit}
                className='containtInputs'>
                    <label htmlFor='nombre'>Nombre
                        <input id='nombre' 
                        type='text'
                        placeholder='Nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        />
                    </label>
                    <label htmlFor='apellido'>Apellido
                        <input id='apellido' type='text' placeholder='Apellido'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        
                        />
                    </label>
                    <label htmlFor='email'>Correo Electronico
                        <input id='email' type='email' placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        />
                    </label>
                    <label htmlFor='contraseña'>Contraseña
                        <input id='contraseña' type='text' placeholder='Contraseña'
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        
                        />
                    </label>
                    <label htmlFor='contraseñados'>Repetir contraseña
                        <input id='contraseñados' type='text' placeholder='Repetir Contraseña'
                        value={contraseñados}
                        onChange={(e) => setContraseñados(e.target.value)}
                        
                        />
                    </label>

                    <input type='submit' value='Registrar'/>
                    
                </form>  
            </div>
        </div>
  
  )
}

export default Login