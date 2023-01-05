import React from 'react'

const Error = ({children}) => {
  return (
    <div className='textAlert'>
    <i class="fa-solid fa-triangle-exclamation">{children}</i>
</div>
  )
}

export default Error