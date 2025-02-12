import React from 'react'
import './Demo2.css'
import { useState } from 'react'
import Usuario from './Usuario'

function Demo2() {
    const [valor, setValor] = useState(0)
    const [usuario, setUsuario] = useState(false)
    
  return (
    <div className='container-demo2'>
        <div className='div-btn2'>

        <button className='btnCaunt1' onClick={() => {setValor(valor + 1)}}>Plus</button>
        <button className='btnCaunt2' onClick={() => {setValor(valor - 1)}}>Moins</button>
        <button className='btnCaunt3' onClick={() => {setValor(0),setUsuario(null)}}>Reset</button>
        <button className='btnCaunt4' onClick={() => {setUsuario(prompt("Username: "))}}>Usuario</button>
         

        </div>


    <div className='div-valor'>

    {valor}

    </div>
    <div className='div-retorno'>

    {/* { usuario  && <p>Olá {usuario} !</p> }  */}

    { <Usuario username = {usuario}/>}

    { usuario && <Usuario username = {usuario}/>}
    
    </div>
      
    </div>
  )

}

export default Demo2
