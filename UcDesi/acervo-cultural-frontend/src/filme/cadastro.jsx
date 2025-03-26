import React from 'react'
import { useState } from 'react'
import '../assets/css/cadastro.css'
import TextInput from '../componentes/TextInput'

function cadastro() {
    
    return (
        <>
        <div className='formulario'>

            <TextInput label='Título' />
            <TextInput label='Subtitulo' />
            <TextInput label='Diretor' />

        </div>
        <div className='botao'>
            <button className='botao-formulario'>Novo</button>
            <button className='botao-formulario'>Salvar</button>
        </div>
        </>
    )
}

export default cadastro
