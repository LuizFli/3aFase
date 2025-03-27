import React from 'react'
import '../assets/css/listagem.css'


const Listagem = props => {

    const { livros } = props


    return (
        <>
                {(!livros || livros.length <= 0) && <span> Nenhum Livro Cadastrado.</span>}
                {(livros && livros.length > 0) && 

                <div className="listagem">
                    <table className="tabela-livros">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Genero</th>
                                <th>Descrição</th>
                                <th>Publicado</th>
                                <th>Editora</th>
                                <th className='acoes' colSpan={2}>Acões</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livro => (
                                <tr key={livro.id}>
                                    <td>{livro.title}</td>
                                    <td>{livro.author}</td>
                                    <td>{livro.genre}</td>
                                    <td>{livro.description}</td>
                                    <td>{livro.published}</td>
                                    <td>{livro.publisher}</td>
                                    <td className='acoes'><button className='botao-td'>Editar</button></td>
                                    <td className='acoes'><button className='botao-td'>Excluir</button></td>
                                    
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