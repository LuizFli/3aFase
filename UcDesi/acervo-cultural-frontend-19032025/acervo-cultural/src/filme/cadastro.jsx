import React from 'react'
import TextInput from '../componentes/textInput'
import '../assets/css/cadastro.css'

const cadastro = () => {
    return (
        <>
        <div className='formulario'>

            <TextInput label='Título' />         
            <TextInput label='Autor' />
            <TextInput label='Genero' />
            <TextInput label='Descrição' />
            <TextInput label='Isbn' />
            <TextInput label='Imagem' />
            <TextInput label='Publicado' />
            <TextInput label='Editora' />

        </div>
        <div className='botao'>

            <button className='botao-formulario'>Salvar</button>
            
        </div>
        </>
    )
}
export default cadastro