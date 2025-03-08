import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.tsx'
import React from 'react'

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)

