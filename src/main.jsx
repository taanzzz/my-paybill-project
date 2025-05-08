import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes.jsx'
import { AuthProvider } from './Pages/AuthContext/AuthContext.jsx';
import './app.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
