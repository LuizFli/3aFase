import React, { useEffect, useState } from 'react'
import EstruturaPagina from '../components/EstrututuraPagina'
import EstruturaLivros from '../components/EstruturaLivros';
import { buscarLivros } from '../services/livros';

const Livros = () => {
    
const [livro, setLivro] = useState([])

const carregarLivros = async () => {

    const livros = await buscarLivros();
    console.log(livros)
    
    setLivro(livros);
}

useEffect(() => {
    carregarLivros()
},[])

return (

    
    <EstruturaPagina titulo="Livros">

            
        {/* {livro} */}
                 
        </EstruturaPagina>
  )
}

export default Livros
