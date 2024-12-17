import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Especialidades } from './pages/Especialidades/Especialidades'
import { Estudios } from './pages/Estudios/Estudios'
import { useActivate } from './hooks/useActivate'
import './App.css'

function App() {
  const { activate } = useActivate()
  activate()
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/especialidades' element={<Especialidades />} />
          <Route path='/estudios' element={<Estudios />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
