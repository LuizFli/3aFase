import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao"
import Listagem from "./listagem"
import { filmes as listaFilmes } from '../util/constante'
import Cadastro from "./cadastro"
import { use, useEffect, useState } from 'react'
import { buscarFilmes } from "../services/filme"




const PaginaFilme = props => {

    const [filmes, setFilmes] = useState([])

    const carregarFilmes = async () => {
        const filmes = await buscarFilmes()
        setFilmes(filmes)
        // buscarFilmes().then(filmes => setFilmes(filmes))

    }


    useEffect( () => {
        // const filmes = await buscarFilmes()
        // setFilmes(listaFilmes)

        carregarFilmes()


    }, [])

    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Cadastro de Filmes">

            <Cadastro />

        </Secao>
        <Secao titulo="Listagem de Filmes" >

            {<Listagem filmes={filmes} />}

        </Secao>

    </EstruturaPagina>
}

export default PaginaFilme;