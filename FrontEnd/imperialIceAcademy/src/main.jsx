import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Globals.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Register from './Pages/Register/Register';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
