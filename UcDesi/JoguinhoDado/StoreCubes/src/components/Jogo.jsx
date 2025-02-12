import React from 'react'

function Jogo() {
    
    const [figures, setFigures] = useState()


    function rodarCubo() {

        let image = Math.floor(Math.random() * 27) +1
        
        setFigures(image+".png")
        
     }



  return (
    <div className='container-jogo'>
      <img src={figures} alt=""  onClick={rodarCubo} />
    </div>
  )
}

export default Jogo
