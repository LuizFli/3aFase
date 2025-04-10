import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao";
import Cadastro from "./cadastro";
import Listagem from "./listagem";
import  { useEffect, useState } from 'react'
import { buscarLivros } from "../services/livros";


const PaginaLivros = props => {

    const [livros, setLivros] = useState([])

    const carregarLivros = async () => {
        const livros = await buscarLivros()
        setLivros(livros.data)
        console.log(livros)
    }
    useEffect( () => {
       
        carregarLivros()

    }, [])

    return <EstruturaPagina titulo="Livros">
        <Secao titulo="Cadastro de Livros">
            <Cadastro/>
        </Secao>
        <Secao 
            titulo="Listagem de Livros"
            children={
                <Listagem livros={livros}/>
            }/>
    </EstruturaPagina>
}

export default PaginaLivros;