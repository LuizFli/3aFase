import React from 'react'
import { useState } from 'react'
import './Jogo.css'



function Jogo() {

    const [numeroSorteado,setNumeroSorteado] = useState()

    
    const [protas, setProtas] = useState(["./image/img1.webp","./image/img2.png","./image/img3.webp","./image/img4.png","./image/img5.png" ,"./image/img6.webp"])

    function sortearProta() {
        let numero = Math.floor(Math.random() * 6)

        setNumeroSorteado(numero)

        console.log(numero)
    }
    
  return (
    <div className='container-jogo'>

        <div className='div-menu'>

            <button onClick={sortearProta}>Sortear Prota</button> 

        </div>
        <div className='div-img'> 

           <img className='img' src={protas[numeroSorteado]} alt="" />            

        </div>
      
    </div>
  )
}

export default Jogo
