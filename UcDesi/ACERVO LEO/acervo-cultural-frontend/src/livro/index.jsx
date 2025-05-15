import { useState } from "react";
import EstruturaPagina from "../componentes/EstruturaPagina";
import Secao from "../componentes/Secao";
import { useSearchParams } from "react-router";

const LIVRO_INICIAL = {
    titulo: '',
    subtitulo: '',
    autor: ''
}

const ListagemLivro = props => {
    const [ livro, setLivro ] = useState(LIVRO_INICIAL);
    const [params, setParams] = useSearchParams();
 console.log("id ", params.get("id"));
 console.log("titulo ", params.get("titulo"));


    return <EstruturaPagina titulo="Livros">
        <Secao titulo="Listagem de Livros">

        </Secao>
    </EstruturaPagina>
}

export default ListagemLivro;