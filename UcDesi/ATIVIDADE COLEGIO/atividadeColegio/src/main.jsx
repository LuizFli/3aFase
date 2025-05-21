import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/routes'
import { RouterProvider } from 'react-router-dom'
import { GlobalContextProvider } from './contexts/GlobalContext'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </GlobalContextProvider>
)
