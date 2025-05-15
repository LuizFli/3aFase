import { Component } from "react";
import App from "../App";
import PaginaFilme from "../filme";
import ListagemLivro from "../livro";
import ListagemFilme from "../filme/PaginaListagem";
import CadastroFilme from "../filme/PaginaCadastro";

const rotas = [
    {
        path: "/",
        Component: App,
    },
    {
        path: "/filme",
        Component: ListagemFilme
    },
    {
        path: "/filme/cadastro/:id?",
        Component: CadastroFilme,
    },
    {
        path: "/livro",
        Component: ListagemLivro,
    }
]

export default rotas;