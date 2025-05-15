import { Button, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, createTheme, styled } from '@mui/material';
import '../assets/css/listagem.css';
import '../assets/css/tabela.css'
import { lime } from '@mui/material/colors';

/*const Button = styled(MuiButton)(({theme}) => ({
    color: theme.palette.secondary.contrastText
}))*/

const tema2 = createTheme({
    palette: {
        primary: lime
    }
})

const Listagem = props => {
    const { filmes, editar, excluir } = props;

    /*if (filmes.length === 0) {
        return <span>Não existem filmes cadastrados.</span>
    }*/

    return (
        <ThemeProvider theme={tema2}>
            {(!filmes || filmes.length === 0) && <span>Não existem filmes cadastrados.</span>}
            {filmes && filmes.length > 0 && 
                    <TableContainer component={Card}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Título</TableCell>
                                    <TableCell>Subtitulo</TableCell>
                                    <TableCell>Diretor</TableCell>
                                    <TableCell colSpan={2}>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filmes.map(filme => (
                                    <TableRow key={filme.id}>
                                        <TableCell>{filme.titulo}</TableCell>
                                        <TableCell>{filme.subtitulo}</TableCell>
                                        <TableCell>{filme.diretor}</TableCell>
                                        <TableCell className='acoes'><Button color='secondary' variant="contained" onClick={() => editar(filme)}>Editar</Button></TableCell>
                                        <TableCell className='acoes'><Button color="primary" variant="contained" onClick={() => excluir(filme)}>Excluir</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </ThemeProvider>
    )
}

export default Listagem;