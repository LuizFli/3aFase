import { useEffect, useState } from "react";
import EstruturaPagina from "../componentes/EstruturaPagina";
import Secao from "../componentes/Secao";
import Listagem from "./listagem";
import { buscarFilmes, excluirFilme } from "../services/filme";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router";

const PaginaListagem = props => {
    const [ filmes, setFilmes ] = useState([]);
    const navigate = useNavigate();

    const carregarFilmes = async () => {
        const filmes = await buscarFilmes();
        setFilmes(filmes);
        
        //buscarFilmes().then(filmes => setFilmes(filmes))
    }

    useEffect(() => {
        carregarFilmes();
    }, []);

    const editarFilme = filmeAEditar => {
        console.log("Filme a Editar: ", filmeAEditar);
        navigate(`/filme/cadastro/${filmeAEditar.id}`);
    }

    const apagarFilme = async filme => {
        await excluirFilme(filme.id);
        carregarFilmes();
    }

    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Listagem de Filmes">
            <Button variant="contained"><Link to="/filme/cadastro">Novo</Link></Button>
            <Listagem filmes={filmes} editar={editarFilme} excluir={apagarFilme} />
        </Secao>
    </EstruturaPagina>
}

export default PaginaListagem;