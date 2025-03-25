import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao"
import Listagem from "./listagem"
import { filmes as listaFilmes } from '../util/constante'




const PaginaFilme = props => {

    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Cadastro de Filmes">
            <h3>Componentes do Cadastro</h3>
        </Secao>
        <Secao titulo="Listagem de Filmes" >

            { <Listagem  filmes={listaFilmes}/>}

        </Secao>

    </EstruturaPagina>
}

export default PaginaFilme;