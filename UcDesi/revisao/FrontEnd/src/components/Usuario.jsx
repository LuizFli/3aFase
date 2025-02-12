import React from 'react'
import './Usuario.css'

function Usuario(props) {
  return (
    <div className='conteiner-user'>
        <p>Nome De Usuario: {props.username}</p>
      
    </div>
  )
}

export default Usuario
