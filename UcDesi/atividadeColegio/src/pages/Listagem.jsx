import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { Box, Stack, Typography } from '@mui/material'
import FragmentoLista from '../components/fragmentoLista'


function Listagem() {
    const { alunos } = useContext(GlobalContext)
    return (
        <div>
            <Box component="section" sx={{ p: 0, m: 0, border: '1px solid grey', width: 'auto-complete', height: '96vh', display: 'flex', alignItems: 'top', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ backgroundColor: 'pink', color: '#133337', width: '100%', height: '8%', display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h2" sx={{ fontFamily: 'monospace', marginLeft: '20px' }}>Listagem de Alunos</Typography>
                </Box>
                <Box sx={{ width: '100%', height: '8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid grey' }}>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nome</Typography>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Matricula</Typography>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Status</Typography>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nota 1</Typography>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nota 2</Typography>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nota 3</Typography>
                    <Typography sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nota 4</Typography>
                </Box>
                { 
                    alunos.map((aluno) => (
                        <FragmentoLista
                            key={aluno.matricula}
                            nome={aluno.nome}
                            matricula={aluno.matricula}
                            status={aluno.status}
                            nota1={aluno.nota1}
                            nota2={aluno.nota2}
                            nota3={aluno.nota3}
                            nota4={aluno.nota4}
                        />
                    ))
                }
            </Box>

        </div>
    )
}

export default Listagem
