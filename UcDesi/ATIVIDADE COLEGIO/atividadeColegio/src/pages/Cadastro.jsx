import React, { useEffect } from 'react'
import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router'
import Navbar from '../components/navbar'
import { inserirAluno, inserirNotasAluno } from '../services/seervices'


function Cadastro() {
    const navigate = useNavigate()
    const { alunos, setAlunos } = useContext(GlobalContext)
    const [matriculaDesejada, setMatriculaDesejada] = useState('')
    const [aluno, setAluno] = useState({
        nome: '',
        matricula: '',
        status: ''
       
    })
    const [alunoNota, setAlunoNota] = useState({
        nota1: '',
        nota2: '',
        nota3: '',
        nota4: ''
    })

    const salvarAluno = () => {
        if (aluno.nome === '' || aluno.matricula === '' || aluno.status === '') {
            alert('Preencha todos os campos')
            return
        }
        inserirAluno(aluno)        
        limpaFormularioAluno()
        console.log("alunos", alunos)
        navigate("/listagem")
    }
    const salvarAlunoNotas = () => {
        if (aluno.nota1 === '' || aluno.nota2 === '' || aluno.nota3 === '' || aluno.nota4 === '') {
            alert('Preencha todos os campos')
            return
        }
        setAluno([...aluno, alunoNota])
        inserirNotasAluno(alunoNota, matriculaDesejada)
        limpaFormularioAlunoNota()
        console.log("alunos", aluno)
        navigate("/listagem")
    }
    const limpaFormularioAluno = () => {
        setAluno({
            nome: '',
            matricula: '',
            status: ''

        })
    }
    const limpaFormularioAlunoNota = () => {
        setAlunoNota({
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
    const handleChangeNota = (e) => {
        const {id, value} = e.target
        setAlunoNota((prev) => ({
            ...prev,
            [id]: value
        }))
    }
    return (
        <Box component="section" sx={{ p: 0, m: 0, width: 'auto-complete', height: '96vh', display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
            <Box sx={{width:'12%', height:'100%'}}>
                <Navbar />
            </Box>
            <Box  sx={{ width: '88%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ backgroundColor: 'pink', color: '#133337', width: '100%', height: '8%', display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h2" sx={{ fontFamily: 'monospace' }}>Cadastro de Alunos</Typography>
                </Box>

                <Box sx={{ display: 'flex', width: '100%', height: '84%', flexDirection:'column' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4%', width: '100%',height:'48%', alignItems: 'center', justifyContent: 'center' }}>

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

                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ width: '40%', display: 'flex', justifyContent: 'end', height: '8%' }}>
                            <Button variant="contained" color="error" onClick={limpaFormularioAluno}>Limpar</Button>
                            <Button variant="contained" color="success" onClick={salvarAluno}>Salvar</Button>
                        </Stack>
                    </Box>

                    <Box sx={{ backgroundColor: 'pink', color: '#133337', width: '100%', height: '8%' }} />
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4%', width: '100%',height:'48%', alignItems: 'center', justifyContent: 'center' }}>

                        <Stack spacing={2} sx={{ width: '40%', maxHeight: '80%' }}>
                        <TextField id="nota1" label="Matricula" variant="filled"
                                value={matriculaDesejada}
                                onChange={ (e) => setMatriculaDesejada(e.target.value)} />
                            <TextField id="nota1" label="Nota1" variant="filled"
                                value={alunoNota.nota1}
                                onChange={handleChangeNota} />
                            <TextField id="nota2" label="Nota2" variant="filled"
                                value={alunoNota.nota2}
                                onChange={handleChangeNota} />
                            <TextField id="nota3" label="Nota3" variant="filled"
                                value={alunoNota.nota3}
                                onChange={handleChangeNota} />
                            <TextField id="nota4" label="Nota4" variant="filled"
                                value={alunoNota.nota4}
                                onChange={handleChangeNota} />

                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ width: '40%', display: 'flex', justifyContent: 'end', height: '8%' }}>
                            <Button variant="contained" color="error" onClick={limpaFormularioAlunoNota}>Limpar</Button>
                            <Button variant="contained" color="success" onClick={salvarAlunoNotas}>Salvar</Button>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: 'pink', color: '#133337', width: '100%', height: '8%', display: 'flex', justifyContent: 'center' }} />
            </Box>
        </Box>
    )
}

export default Cadastro
