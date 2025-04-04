import { /* useState, */ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import CadastroFilme from "../filme/CadastroFilme";
import { buscarFilmePorId, setarFilmeAtual } from "../redux/filme/actions";
import { getFilmeEmEdicao } from "../redux/filme/selectors";

const PageCadastroFilme = props => {
    //const [filme, setFilme] = useState();
    const filme = useSelector(getFilmeEmEdicao);
    const dispatch = useDispatch();
    const { id } = useParams();
   
    useEffect(() => {
        if (!id) {
            //setFilme({});
            dispatch(setarFilmeAtual({}))
            return;
        }
        
        carregarFilmePorId(id);
    }, [id]);

    /* const carregarFilmePorId = async (id) => {
        const filme = await FilmeAPI.buscarFilmePorId(id);
        console.log("Filme: ", filme)
        //setFilme(filme);
        dispatch(setarFilmeAtual(filme))
    } */

    const carregarFilmePorId = (id) => {
        dispatch(buscarFilmePorId(id));
    }

    return (
        <EstruturaPagina titulo="Filmes">
            <Secao titulo="Cadastro de Filmes">
                <CadastroFilme filme={filme} />
            </Secao>
        </EstruturaPagina>
    );
}

export default PageCadastroFilme;