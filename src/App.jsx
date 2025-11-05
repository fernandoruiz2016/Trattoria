import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import { Inicio } from './pages/inicio'
import { Reserva } from './pages/reserva'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
