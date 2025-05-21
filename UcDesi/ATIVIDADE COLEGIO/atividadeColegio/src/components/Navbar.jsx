import { Button, Box, Stack } from '@mui/material'
import React from 'react'

function Navbar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor:'#004d5c', height:'100%', width:'100%', borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
            <Stack spacing={2} sx={{marginLeft: '2%',marginRight:'2%',marginTop:'4%'}}>
                <Button variant="contained" color="primary" href="/">Cadastro</Button>
                <Button variant="contained" color="primary" href="/listagem">Lista</Button>
            </Stack>
        </Box>
    )
}

export default Navbar
