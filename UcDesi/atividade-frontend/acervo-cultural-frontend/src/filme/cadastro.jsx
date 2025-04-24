import '../assets/css/cadastro.css'
import TextInput from '../componentes/TextInput';

const Cadastro = props => {
    const { filme, salvar, limpar } = props

    return (
        <div className="formulario">
            <TextInput label='Título' value={filme.titulo} handleChange={e => alterarValor(e.target.value)} />
            <TextInput label='Subtitulo' value={filme.subtitulo} handleChange={e => alterarValor(e.target.value)} />
            <TextInput label='Diretor' value={filme.diretor} handleChange={e => alterarValor(e.target.value)} />
            <div className='botoes'>
                <button className='botao-formulario' onClick={limpar}>Novo</button>
                <button className='botao-formulario' onClick={() => salvar(filme)}>Salvar</button>
            </div>
        </div>
    )
}

export default Cadastro;