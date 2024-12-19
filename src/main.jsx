import { createRoot } from 'react-dom/client'
import './index.css'
import "../node_modules/flowbite/dist/flowbite.js"
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

createRoot(root).render(
  <RouterProvider router={router}/>
)
