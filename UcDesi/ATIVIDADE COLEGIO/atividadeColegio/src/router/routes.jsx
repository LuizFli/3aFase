import { createBrowserRouter } from "react-router-dom"; 
import Cadastro from "../pages/Cadastro";
import Listagem from "../pages/Listagem";

const router = createBrowserRouter([
    {path: "/", element: <Cadastro />},
    {path: "/listagem", element: <Listagem/>}
  
])

export default router;