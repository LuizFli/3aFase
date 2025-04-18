import React from 'react'
import '../assets/css/listagem.css'
import { useState } from 'react'
import { Table, TableBody, TableContainer, TableHead } from '@mui/material'




const Listagem = props => {
    const {livros , editar, excluir} = props
    const [condicional, setCondicional] = useState(false)

    function mostarLivros() {
        setCondicional(!condicional)
    }



    return (
        <>
        <button onClick={mostarLivros} className='botao-formulario'>Mostrar Livros</button>
        
                {(!livros || livros.length <= 0) && <span> Nenhum Livro Cadastrado.</span>}
                {(condicional == true && livros && livros.length > 0) && 

                <div className="listagem">
                    <TableContainer>
                        <thead>
                            <th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Editora</th>
                                <th className='acoes' colSpan={2}>Acões</th>
                            </th>
                        </thead>
                        <tbody>
                            {livros.map(livro => (
                                <tr key={livro.id}>
                                    <td>{livro.title}</td>
                                    <td>{livro.author}</td>
                                    <td>{livro.publisher}</td>
                                    <td className='acoes'><button className='botao-td' onClick={() => editar(livro)}>Editar</button></td>
                                    <td className='acoes'><button className='botao-td' onClick={() => excluir(livro)}>Excluir</button></td>
                                    
                                </tr>
                            ))} 
                        </tbody>
                    
                    </TableContainer>

                </div>
                        
                }                
        </>
    )
}

export default Listagem;