import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao";
import Cadastro from "./cadastro";
import Listagem from "./listagem";
import { useEffect, useState } from 'react'
import { buscarLivros } from "../services/livros";
import { atualizarLivros } from "../services/livros";
import { inserirLivros } from "../services/livros";
import { excluirLivros } from "../services/livros";

import { livros as listaLivros } from "../util/constantes";

const LIVRO_INICIAL = { title: '', author: '', publisher: '' }

const PaginaLivros = props => {

    const [livros, setLivros] = useState([])
    const [livro, setLivro] = useState(LIVRO_INICIAL)

    const editarLivros = livroAditar => {
        console.log(livroAditar)
        setLivro(livroAditar)

    }
    const salvarLivro = async livroASalvar => {
        console.log(livroASalvar)
        if (livroASalvar.id) {

            await atualizarLivros(livro)
            carregarLivros()
            return
        }
        await inserirLivros(livro)
        limparFormulario()
        carregarLivros()

    }
    const carregarLivros = async () => {
        const listaLivros = await buscarLivros()
        setLivros(listaLivros)

    }
    const apagarLivros = async livroExcluir => {
        // const listaLivros = livros.filter(livro => livro.id !== livroExcluir.id)
        // setLivros(listaLivros)
        await excluirLivros(livroExcluir.id)
        carregarLivros()
        // console.log(livroExcluir)
        // console.log(livros)
        // console.log(livroExcluir.id)
    }
    const limparFormulario = () => {
        setLivro(LIVRO_INICIAL)
    }
    useEffect(() => {

        carregarLivros()

    }, [])

    return <EstruturaPagina titulo="Livros">
        <Secao titulo="Cadastro de Livros">
            <Cadastro livro={livro} salvar={salvarLivro} limpar={limparFormulario} />
        </Secao>
        <Secao
            titulo="Listagem de Livros"
            children={


                <Listagem livros={livros} editar={editarLivros} excluir={apagarLivros} />

            } />
    </EstruturaPagina>
}

export default PaginaLivros;