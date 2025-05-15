import { useContext, useEffect, useState } from "react";
import EstruturaPagina from "../componentes/EstruturaPagina";
import Secao from "../componentes/Secao";
import Cadastro from "./cadastro";
import { useNavigate, useParams } from "react-router";
import { atualizarFilme, buscarFilmePorId, inserirFilme } from "../services/filme";
import  ListasContext  from "../contexts/listas";

const FILME_INICIAL = {
    titulo: '',
    subtitulo: '',
    diretor: ''
}

const PaginaCadastro = props => {
    const [ filme, setFilme ] = useState(FILME_INICIAL);
    const { generos} = useContext(ListasContext)
    console.log("generos ", generos);
    const navigate = useNavigate();
    const { id } = useParams();

    const carregarFilme = async id => {
        const filme = await buscarFilmePorId(id);
        setFilme(filme);
    }

    useEffect(() => {
        if (!id) {
            return;
        }
        carregarFilme(id);
    }, []);

    const voltarParaListagem = () => {
        limparFormulario()
        navigate("/filme");
    }

    const limparFormulario = () => {
        setFilme(FILME_INICIAL);
    }

    const salvarFilme = async filmeASalvar => {
        console.log("Filme a Salvar: ", filmeASalvar);
        if (filmeASalvar.id) {
            console.log("Filme em Atualização")
            await atualizarFilme(filmeASalvar);
            navigate("/filme");
            return;
        }
        
        console.log("Filme em Inserção")
        await inserirFilme(filmeASalvar);
        limparFormulario();
        navigate("/filme");
    }

    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Cadastro de Filmes">
            <Cadastro filme={filme} 
                salvar={salvarFilme} 
                limpar={limparFormulario} 
                voltar={voltarParaListagem}/>
        </Secao>
    </EstruturaPagina>
}

export default PaginaCadastro;