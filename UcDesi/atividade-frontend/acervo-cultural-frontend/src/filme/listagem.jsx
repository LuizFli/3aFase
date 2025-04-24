import '../assets/css/listagem.css';
import '../assets/css/tabela.css'

const Listagem = props => {
    const { filmes, editar, excluir } = props;

   

    return (
        <>
            {(filmes.length === 0) && <span>Não existem filmes cadastrados.</span>}
            {filmes.length > 0 && 
                <div className='listagem'>
                    <table className='tabela-filmes'>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Subtitulo</th>
                                <th>Diretor</th>
                                <th className='acoes' colSpan={2}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filmes.map(filme => (
                                <tr key={filme.id}>
                                    <td>{filme.titulo}</td>
                                    <td>{filme.subtitulo}</td>
                                    <td>{filme.diretor}</td>
                                    <td className='acoes'><button onClick={() => editar(filme)}>Editar</button></td>
                                    <td className='acoes'><button onClick={() => excluir(filme)}>Excluir</button></td>
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