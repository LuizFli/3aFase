import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import PaginaFilme from './filme/index.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { lime } from '@mui/material/colors';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import Cadastro from './filme/cadastro.jsx';
import App from './App.jsx';
import rotas from './rotas/rotas-data-mode.js';
import { ListasProvider } from './contexts/listas.jsx';

const tema = createTheme({
  palette: {
    primary: {
      main: "#00FFFF"
    }
  },
  typography: {

  }
});
console.log("Tema: ", tema)
const basename = import.meta.env.BASE_URL;

const router = createBrowserRouter(rotas, {basename: basename});

createRoot(document.getElementById('react-page')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <ListasProvider>
        {/*<BrowserRouter basename={basename}>
          <Routes>
            {rotas.map(rota => (
              <Route key={rota.path} path={rota.path} element={rota.element}/>
            ))}
          </Routes>
        </BrowserRouter>*/}
        <RouterProvider router={router} />
      </ListasProvider>
    </ThemeProvider>
  </StrictMode>,
)
