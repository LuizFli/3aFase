import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import PaginaFilme from './filme/index.jsx'

createRoot(document.getElementById('react-page')).render(
  <StrictMode>
    <PaginaFilme />
  </StrictMode>,
)
