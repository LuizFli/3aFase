import React, { useEffect } from 'react'
import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router'

function Cadastro() {
    const navigate = useNavigate()
    const { alunos, setAlunos } = useContext(GlobalContext)
    const [aluno, setAluno] = useState({
        nome: '',
        matricula: '',
        status: '',
        nota1: '',
        nota2: '',
        nota3: '',
        nota4: ''
    })
    const salvar = () => {
        if (aluno.nome === '' || aluno.matricula === '' || aluno.status === '' || aluno.nota1 === '' || aluno.nota2 === '' || aluno.nota3 === '' || aluno.nota4 === '') {
            alert('Preencha todos os campos')
            return
        }
        setAlunos([...alunos, aluno])
        limpaFormulario()
        console.log("alunos", alunos)
        navigate("/listagem")
    }
    const limpaFormulario = () => {
        setAluno({
            nome: '',
            matricula: '',
            status: '',
            nota1: '',
            nota2: '',
            nota3: '',
            nota4: ''
        })
    }

    const handleChange = (e) => {
        const { id, value } = e.target

        setAluno((prev) => ({
            ...prev,
            [id]: value
        }))
    }
    return (
        <div>
            <Box component="section" sx={{ p: 0, m: 0, border: '1px solid grey', width: 'auto-complete', height: '96vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                <Box sx={{ backgroundColor: 'pink', color: '#133337', width: '100%', height: '8%', display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h2" sx={{ fontFamily: 'monospace' }}>Cadastro de Alunos</Typography>
                </Box>

                <Stack spacing={2} sx={{ width: '40%', maxHeight: '80%' }}>

                    <TextField id="nome" label="Nome" variant="filled"
                        value={aluno.nome}
                        onChange={handleChange} />
                    <TextField id="matricula" label="Matricula" variant="filled"
                        value={aluno.matricula}
                        onChange={handleChange} />
                    <TextField id="status" label="Status" variant="filled"
                        value={aluno.status}
                        onChange={handleChange} />
                    <TextField id="nota1" label="Nota1" variant="filled"
                        value={aluno.nota1}
                        onChange={handleChange} />
                    <TextField id="nota2" label="Nota2" variant="filled"
                        value={aluno.nota2}
                        onChange={handleChange} />
                    <TextField id="nota3" label="Nota3" variant="filled"
                        value={aluno.nota3}
                        onChange={handleChange} />
                    <TextField id="nota4" label="Nota4" variant="filled"
                        value={aluno.nota4}
                        onChange={handleChange} />

                </Stack>
                <Stack spacing={2} direction="row" sx={{ width: '40%', display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" color="error" onClick={limpaFormulario}>Limpar</Button>
                    <Button variant="contained" color="success" onClick={salvar}>Salvar</Button>
                </Stack>

                <Box sx={{ backgroundColor: 'pink', color: '#133337', width: '100%', height: '8%', display: 'flex', justifyContent: 'center' }} />
            </Box>
        </div>
    )
}

export default Cadastro
