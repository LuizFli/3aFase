import Filme from "../pages/Filme";
import Home from "../pages/Home";
import Livros from "../pages/Livros";
import PageCadastroFilme from "../pages/PageCadastroFilme";
import PageListaFilme from "../pages/PageListaFilme";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/livros",
        element: <Livros />
    },
    {
        path: "/filmes",
        element: <Filme />
    },
    {
        path: "/filmes/listagem",
        element: <PageListaFilme />
    },
    {
        path: "/filmes/cadastro",
        element: <PageCadastroFilme />
    },
    {
        path: "/filmes/cadastro/:id",
        element: <PageCadastroFilme />
    }
];

export default routes;