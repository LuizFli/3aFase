import React, { use, useEffect } from 'react'
import { useState } from 'react'
import './Jogo.css'

function Jogo() {

    const [figures, setFigures] = useState("./image/0.svg")
    const [images, setImages] = useState([])


    function rodarCubo() {

        let image = Math.floor(Math.random() * 27) + 1;
        const newFigure = "./image/" + image + ".svg";
    
        setFigures(newFigure);
        setImages(prevImages => [...prevImages, newFigure])
        

    }
    return (

        <div className='container-jogo'>
            <div className='div-p'>
                <p>Clique no incone para gerar outra aleatória!</p>

            </div>
            <div className='div-img'>

                <img className='imagens' src={figures} alt="" onClick={rodarCubo} />


            </div>
            <div className='map'>
                {
                    images.map((figures, i) => {
                        return (
                            <img key={i} className='im' src={figures} alt="" />
                        )
                    })
                }



            </div>
            <div className='footer'>

                <button className='btn' onClick={() => {setFigures("./image/0.svg"),setImages([])}}>Reset</button>

            </div>
        </div>
    )
}

export default Jogo
