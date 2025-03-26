import '../assets/css/listagem.css'
import { filmes as listaFilmes } from '../util/constante'

const Listagem = props => {
    const { filmes } = props;

    // if (!filmes || filmes.length === 0) {
    //     return <span> Nenhum Filme Cadastrado.</span>
    // }
    return (
        <>
            {(!filmes || filmes.length <= 0) && <span> Nenhum Filme Cadastrado.</span>}
            {(filmes && filmes.length > 0) &&
                <div className='listagem'>
                    <table className='tabela-filmes'>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Subtitulo</th>
                                <th>Diretor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filmes.map(filme => (
                                <tr key={filme.id}>
                                    <td>{filme.titulo}</td>
                                    <td>{filme.subtitulo}</td>
                                    <td>{filme.diretor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </>
    )
}
export default Listagem;