import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import PaginaLivros from './livro/index.jsx'

createRoot(document.getElementById('react-page')).render(
  <StrictMode>
    <PaginaLivros/>
  </StrictMode>,
)
