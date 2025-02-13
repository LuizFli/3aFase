import React from 'react'
import Jogo from './Jogo'
import Header from './Header'
import './Body.css'

function Body() {

    return (
        <div className='container-body'>
            
             <div className='div-header'>
                <Header />
            </div>


            <div className='div-jogo'>

                <Jogo />
            </div>

        </div>
    )
}

export default Body
