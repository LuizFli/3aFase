import { /* useState,  */useEffect } from "react";
import { connect } from "react-redux";
import { /* useHistory, */ useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import ListaFilme from "../filme/ListaFilme";
import FilmeAPI from '../services/filme';
import { buscarFilmes, excluirFilme } from "../redux/filme/actions";
import { getFilmes } from "../redux/filme/selectors";

const PageListaFilme = props => {
    const { filmes, buscarFilmes, excluirFilme } = props;
    //const [filmes, setFilmes] = useState();
    /* const history = useHistory();

    const editarFilme = (filme) => {
        history.push(`/filmes/cadastro/${filme.id}`);
    } */
    const navigate = useNavigate();

    const editarFilme = (filme) => {
        navigate.push(`/filmes/cadastro/${filme.id}`);
    }

    /* const excluirFilme = async filmeAExcluir => {
        await FilmeAPI.excluirFilme(filmeAExcluir.id);
        carregarFilmes();
    } */

    const handleExcluirFilme = filme => {
        excluirFilme(filme)
    }

    /* const carregarFilmes = async () => {
        const filmes = await FilmeAPI.buscarFilmes();
        console.log("filmes:", filmes);
        //setFilmes(filmes);
        armazenarFilmes(filmes);
    } */

    const carregarFilmes = () => {
        buscarFilmes();
    }

    useEffect(() => {
        carregarFilmes();
    }, []);

    return (
        <EstruturaPagina titulo="Filmes">
            <Secao titulo="Listagem de Filmes" >
                <button>Novo</button>
                <ListaFilme filmes={filmes} editarFilme={editarFilme} excluirFilme={handleExcluirFilme} />
            </Secao>
        </EstruturaPagina>
    );
}

const mapStateToProps = state => ({
    filmes: getFilmes(state)
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            buscarFilmes,
            excluirFilme
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(PageListaFilme);