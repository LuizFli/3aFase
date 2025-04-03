import React from 'react'
import TextInput from '../componentes/textInput'
import '../assets/css/cadastro.css'

const cadastro = props  => {

    const {livro, salvar, limpar} = props
    const alterarValor = (nomeCampo, valorCampo) => {
        console.log("livro antes",livro)
        livro[nomeCampo] = valorCampo
        console.log("livro Depois",livro)
    }
    
    // const alterarTitulo = titulo => {
    //     livro.title = titulo
    // }
    // const alterarAutor = autor => {
    //     livro.author = autor
    // }
    // const alterarEditora = editora => {
    //     livro.publisher = editora
    // }
    return (
        <>
        <div className='formulario'>

            <TextInput label='Título' value = {livro.title} handleChenge = {e => alterarValor(e.target.value)}/>
            <TextInput label='Autor' value = {livro.author} handleChenge = {e => alterarValor(e.target.value)}/>
            <TextInput label='Editora' value = {livro.publisher} handleChenge = {e => alterarValor(e.target.value)}/>

        </div>
        <div className='botao'>

            <button className='botao-formulario' onClick={() => limpar(livro)}>Novo</button>
            <button className='botao-formulario' onClick={() => salvar(livro)}>Salvar</button>
            
        </div>
        </>
    )
}
export default cadastro