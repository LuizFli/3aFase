import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao";
import Listagem from "./listagem";
import { filmes as listaFilmes } from '../util/constantes';
import Cadastro from "./cadastro";
import { useEffect, useState } from "react";
import { buscarFilmes , inserirFilmes, atualizaFilmes, excluirFilme} from "../services/filme";

const _filmeInicial = {
    titulo: '',
    subtitulo: '',
    diretor: ''
}
const PaginaFilme = props => {
    const [ filmes, setFilmes ] = useState([]);
    const [filme, setFilme] = useState(_filmeInicial)
    const limpaFormulario = () => {
        setFilme(_filmeInicial)
    }
    const carregarFilmes = async () => {
        const filmes = await buscarFilmes();
        setFilmes(filmes);
    }

    const salvarFilme = async filmeASalvar => {
        if(filmeASalvar.id){
            await atualizaFilmes(filmeASalvar);
            carregarFilmes();
            return;
        }
        
    }
    const editarFilme = filmeAEditar => {
        limpaFormulario()
        console.log("Filme a Editar: ", filmeAEditar);
        setFilme(filmeAEditar)  
        
        
    }
    const apagarFilme = async filemAApagar => {
        await excluirFilme(filemAApagar.id)
        carregarFilmes()
        
    }
    useEffect(() => {
        carregarFilmes();
    }, []);


    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Cadastro de Filmes">
            <Cadastro  filme={filme} salvar={salvarFilme} limpar={limpaFormulario}/>
        </Secao>
        <Secao  titulo="Listagem de Filmes">
            <Listagem filmes={filmes} editar={editarFilme} excluir={apagarFilme}/>
        </Secao>
    </EstruturaPagina>
}

export default PaginaFilme;