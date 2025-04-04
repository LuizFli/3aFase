import Filme from "../pages/Filme";
import Home from "../pages/Home";
import Livros from "../pages/Livros";
import PageCadastroFilme from "../pages/PageCadastroFilme";
import PageListaFilme from "../pages/PageListaFilme";

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/livros",
        component: Livros,
        
    },
    {
        path: "/filmes",
        component: Filme,
        exact: true
    },
    {
        path: "/filmes/listagem",
        component: PageListaFilme
    },
    {
        path: "/filmes/cadastro/:id?",
        component: PageCadastroFilme
    }
];

export default routes;