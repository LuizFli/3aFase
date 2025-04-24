import React from 'react'
import '../assets/css/listagem.css'
import { useState } from 'react'
import { Button as MuiButton, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from '@mui/material'


const Button = styled(MuiButton)(({theme}) => ({
    color: theme.palette.secondary.contrastText
}))

const Listagem = props => {
    const { livros, editar, excluir } = props
    const [condicional, setCondicional] = useState(false)

    function mostarLivros() {
        setCondicional(!condicional)
    }



    return (
        <>
            <button onClick={mostarLivros} className='botao-formulario'>Mostrar Livros</button>

            {(!livros || livros.length <= 0) && <span> Nenhum Livro Cadastrado.</span>}
            {(condicional == true && livros && livros.length > 0) &&

                
                    <TableContainer>
                        <Table>
                            <TableRow>

                                <TableCell>Título</TableCell>
                                <TableCell>Autor</TableCell>
                                <TableCell>Editora</TableCell>
                                <TableCell className='acoes' colSpan={2}>Acões</TableCell>

                            </TableRow>
                        </Table>
                        <Table>
                            <TableBody>

                                {livros.map(livro => (
                                    <TableRow key={livro.id}>
                                        <TableCell>{livro.title}</TableCell>
                                        <TableCell>{livro.author}</TableCell>
                                        <TableCell>{livro.publisher}</TableCell>
                                        <TableCell className='acoes'><Button variant='contained' color='primary' onClick={() => editar(livro)}>Editar</Button></TableCell>
                                        <TableCell className='acoes'><Button variant='contained' color='secondary' onClick={() => excluir(livro)}>Excluir</Button></TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                           

            }
        </>
    )
}

export default Listagem;