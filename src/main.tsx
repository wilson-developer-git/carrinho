import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import CartProvider from './contexts/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
