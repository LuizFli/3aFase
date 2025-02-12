import React from 'react'
import './Demo1.css'

function Demo1() {

  function responderClique() {
    alert('Clicou no botão!')
  }

  return (

    <div className='container-demo1'>
      <div className='div-btn'>
        <button className='btnTeste' onClick={responderClique}>Function</button>
        <button className='btnTeste' onClick={() => { alert('Vim De uma Arrow Function!') }}>Arrow Function</button>

      </div>


      <div className='img'>
    <div>

        <img className='img-sung' src="./image/SungShadow2.webp" alt="" />
    </div>
    <div>
        <img className='img-animado' src="./image/animado.gif" alt="" />
    </div>
        

      </div>

    </div>
  )
}

export default Demo1
