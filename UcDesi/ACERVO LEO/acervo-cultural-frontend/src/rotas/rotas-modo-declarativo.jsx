import App from "../App";
import PaginaFilme from "../filme";
import Listagem from "../filme/listagem";

const rotas = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/filme",
        element: <PaginaFilme />,
    },
    {
        path: "/livro",
        element: <Listagem />,
    }

]

export default rotas;