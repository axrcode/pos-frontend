import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PosProvider } from './context/PosProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PosProvider>
      <RouterProvider router={router} />
    </PosProvider>
  </React.StrictMode>,
)
