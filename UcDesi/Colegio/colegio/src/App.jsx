import { useState } from 'react'
import './App.css'
import { Box, Button, Card, CardContent, Container, Stack, TextField } from '@mui/material'

function App() {
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [status, setStatus] = useState('')
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [nota3, setNota3] = useState('')
  const [nota4, setNota4] = useState('')

  return (
    <>
      <Box sx={{ p: 0, m: 0, display: 'flex', backgroundColor: 'white', width: '100vw', height: '100vh', justifyContent:'space-between', flexDirection:'column'}}>

        <Stack spacing={2} sx={{ width: '100%', display: 'flex' }}>
          {/*HEADER*/}
          <Box sx={{ height: '64px', width: '100%', backgroundColor: 'pink' }}></Box>
          {/*CONTENT*/}
          <Container sx={{ border: '1px solid black'}}>
            <Stack spacing={2}>
              <Card>
                
                  <TextField id="nome" label="Nome" variant="standard" />

                  <TextField id="matricula" label="Matricula" variant="standard" />

                  <TextField id="status" label="Status" variant="standard" />
                
                  <TextField id="nota1" label="Nota1" variant="standard" />
                
                  <TextField id="nota2" label="Nota2" variant="standard" />
                
                  <TextField id="nota3" label="Nota3" variant="standard" />
                
                  <TextField id="nota4" label="Nota4" variant="standard" />
                
              </Card>
            </Stack>
          </Container>
        </Stack>
      {/*FOOTER*/}
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Box sx={{ height: '64px', width: '100%', backgroundColor: 'pink' }}></Box>
        </Stack>
      </Box>

    </>
  )
}

export default App
