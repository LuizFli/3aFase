import { useState, useEffect } from "react";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import CadastroFilme from "../filme/CadastroFilme";
import ListaFilme from "../filme/ListaFilme";
import FilmeAPI, { buscarFilmes } from '../services/filme';
import { listarFilmes, listarFilmesComAxios } from "../services/filmenovo";
import { FILMES } from '../util/constantes';

const Filme = (props) => {

    const [filmes, setFilmes] = useState([]);
    const [filmeEmEdicao, setFilmeEmEdicao] = useState();

    const editarFilme = (filme) => {
        setFilmeEmEdicao(filme);
    }

    const excluirFilme = filme => {

    }

   
    const carregarFilmes = async () => {
        //listarFilmes().then(filmes => setFilmes(filmes))
        const filmes = await FilmeAPI.buscarFilmes();
        //const filmes = await listarFilmesComAxios();
        console.log("Filmes: ", filmes)
        setFilmes(filmes);
    }
    

    useEffect(() => {
        carregarFilmes();
    }, []);

    useEffect(() => {
        setFilmeEmEdicao(filmes[0]);
        return () => console.log("Componente Encerrado quando muda filmes");
    }, [filmes]);

    useEffect(() => {
        console.log("Mudou o filme em edição");
        return () => console.log("Componente Encerrado quando muda filme em edição");
    }, [filmeEmEdicao]);

    return (
        <EstruturaPagina titulo="Filmes">
            <Secao titulo="Cadastro de Filmes">
                <CadastroFilme filme={filmeEmEdicao} />
            </Secao>
            <Secao titulo="Listagem de Filmes" >
                <ListaFilme filmes={filmes} editarFilme={editarFilme} excluirFilme={excluirFilme} />
            </Secao>
        </EstruturaPagina>
    );
}

export default Filme;